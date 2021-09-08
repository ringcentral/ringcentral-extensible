import RingCentral from '@rc-ex/core';
import SdkExtension from '@rc-ex/core/lib/SdkExtension';
import {
  SubscriptionInfo,
  CreateSubscriptionRequest,
} from '@rc-ex/core/lib/definitions';
import PubNub, {PubnubConfig} from 'pubnub';

class PubNubExtension extends SdkExtension {
  rc!: RingCentral;
  subscriptions: Subscription[] = [];

  async install(rc: RingCentral) {
    this.rc = rc;
  }

  disable() {
    super.disable();
    for (const subscription of this.subscriptions ?? []) {
      subscription.enabled = false;
    }
  }

  async subscribe(
    eventFilters: string[],
    callback: (event: {}) => void
  ): Promise<Subscription> {
    const subscription = new Subscription(this, eventFilters, callback);
    await subscription.subscribe();
    this.subscriptions.push(subscription);
    return subscription;
  }

  async revoke() {
    for (const subscription of this.subscriptions) {
      await subscription.revoke();
    }
    this.subscriptions = [];
  }
}

export class Subscription {
  pne: PubNubExtension;
  eventFilters: string[];
  callback: (event: {}) => void;
  timeout?: NodeJS.Timeout;
  pubnub?: PubNub;
  enabled = true;

  constructor(
    pne: PubNubExtension,
    eventFilters: string[],
    callback: (event: {}) => void
  ) {
    this.pne = pne;
    this.eventFilters = eventFilters;
    this.callback = callback;
  }

  get requestBody(): CreateSubscriptionRequest {
    return {
      deliveryMode: {transportType: 'PubNub', encryption: true},
      eventFilters: this.eventFilters,
    };
  }

  _subscriptionInfo?: SubscriptionInfo;
  get subscriptionInfo(): SubscriptionInfo | undefined {
    return this._subscriptionInfo;
  }
  set subscriptionInfo(_subscription) {
    this._subscriptionInfo = _subscription;
    if (this.timeout) {
      global.clearTimeout(this.timeout);
      this.timeout = undefined;
    }
    if (_subscription) {
      this.timeout = global.setTimeout(() => {
        this.refresh();
      }, ((_subscription.expiresIn ?? 900) - 120) * 1000);
    }
  }

  async subscribe() {
    this.subscriptionInfo = await this.pne.rc
      .restapi()
      .subscription()
      .post(this.requestBody);
    this.pubnub = new PubNub({
      subscribeKey: this.subscriptionInfo!.deliveryMode!.subscriberKey!,
      origin: 'ringcentral.pubnubapi.com',
      useRandomIVs: false,
    } as PubnubConfig); // todo: remove `as PubnubConfig`
    this.pubnub.addListener({
      message: (message: {message: string}) => {
        if (!this.enabled) {
          return;
        }
        const decrypted = this.pubnub!.decrypt(
          message.message,
          this.subscriptionInfo!.deliveryMode!.encryptionKey,
          {
            encryptKey: false,
            keyEncoding: 'base64',
            keyLength: 128,
            mode: 'ecb',
          }
        );
        this.callback(decrypted);
      },
    });
    this.pubnub.subscribe({
      channels: [this.subscriptionInfo!.deliveryMode!.address!],
    });
  }

  async refresh() {
    if (!this.subscriptionInfo) {
      return;
    }
    try {
      this.subscriptionInfo = await this.pne.rc
        .restapi()
        .subscription(this.subscriptionInfo!.id)
        .put(this.requestBody);
    } catch (e: any) {
      if (e.response && e.response.status === 404) {
        // subscription expired
        await this.subscribe();
      }
    }
  }

  async revoke() {
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

export default PubNubExtension;
