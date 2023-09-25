import type RingCentral from '@rc-ex/core';
import SdkExtension from '@rc-ex/core/lib/SdkExtension';
import type SubscriptionInfo from '@rc-ex/core/lib/definitions/SubscriptionInfo';
import type CreateSubscriptionRequest from '@rc-ex/core/lib/definitions/CreateSubscriptionRequest';
import PubNub from 'pubnub';
import type { RestResponse } from '@rc-ex/core/lib/types';

export class Subscription {
  public pne: PubNubExtension;

  public eventFilters: string[];

  public callback: (event: {}) => void;

  public timeout?: NodeJS.Timeout;

  public pubnub?: PubNub;

  public enabled = true;

  public _subscriptionInfo?: SubscriptionInfo;

  public constructor(pne: PubNubExtension, eventFilters: string[], callback: (event: {}) => void) {
    this.pne = pne;
    this.eventFilters = eventFilters;
    this.callback = callback;
  }

  public get requestBody(): CreateSubscriptionRequest {
    return {
      deliveryMode: { transportType: 'PubNub', encryption: true },
      eventFilters: this.eventFilters,
    };
  }

  public get subscriptionInfo(): SubscriptionInfo | undefined {
    return this._subscriptionInfo;
  }

  public set subscriptionInfo(_subscription) {
    this._subscriptionInfo = _subscription;
    if (this.timeout) {
      global.clearTimeout(this.timeout);
      this.timeout = undefined;
    }
    if (_subscription) {
      this.timeout = global.setTimeout(
        () => {
          this.refresh();
        },
        ((_subscription.expiresIn ?? 900) - 120) * 1000,
      );
    }
  }

  public async subscribe() {
    this.subscriptionInfo = await this.pne.rc.restapi().subscription().post(this.requestBody);
    this.pubnub = new PubNub({
      userId: this.pne.rc.token!.owner_id,
      subscribeKey: this.subscriptionInfo!.deliveryMode!.subscriberKey!,
      origin: 'ringcentral.pubnubapi.com',
      useRandomIVs: false,
    });
    this.pubnub.addListener({
      message: (message: { message: string }) => {
        if (!this.enabled) {
          return;
        }
        const decrypted = this.pubnub!.decrypt(message.message, this.subscriptionInfo!.deliveryMode!.encryptionKey, {
          encryptKey: false,
          keyEncoding: 'base64',
          keyLength: 128,
          mode: 'ecb',
        });
        this.callback(decrypted);
      },
    });
    this.pubnub.subscribe({
      channels: [this.subscriptionInfo!.deliveryMode!.address!],
    });
  }

  public async refresh() {
    if (!this.subscriptionInfo) {
      return;
    }
    try {
      this.subscriptionInfo = await this.pne.rc.restapi().subscription(this.subscriptionInfo!.id).put(this.requestBody);
    } catch (e) {
      const re = e as { response: RestResponse };
      if (re.response && re.response.status === 404) {
        // subscription expired
        await this.subscribe();
      }
    }
  }

  public async revoke() {
    if (!this.subscriptionInfo) {
      return;
    }
    if (this.timeout) {
      global.clearTimeout(this.timeout);
      this.timeout = undefined;
    }
    this.pubnub!.unsubscribeAll();
    this.pubnub!.stop();
    this.pubnub = undefined;
    await this.pne.rc.restapi().subscription(this.subscriptionInfo.id).delete();
    this.subscriptionInfo = undefined;
    this.enabled = false;
  }
}

class PubNubExtension extends SdkExtension {
  public rc!: RingCentral;

  public subscriptions: Subscription[] = [];

  public async install(rc: RingCentral) {
    this.rc = rc;
  }

  public disable() {
    super.disable();
    for (const subscription of this.subscriptions ?? []) {
      subscription.enabled = false;
    }
  }

  public enable() {
    super.enable();
    for (const subscription of this.subscriptions ?? []) {
      subscription.enabled = true;
    }
  }

  public async subscribe(eventFilters: string[], callback: (event: {}) => void): Promise<Subscription> {
    const subscription = new Subscription(this, eventFilters, callback);
    await subscription.subscribe();
    this.subscriptions.push(subscription);
    return subscription;
  }

  public async revoke() {
    for (const subscription of this.subscriptions) {
      await subscription.revoke();
    }
    this.subscriptions = [];
  }
}

export default PubNubExtension;
