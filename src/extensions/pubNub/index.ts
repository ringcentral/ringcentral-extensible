// eslint-disable-next-line node/no-unpublished-import
import PubNub from 'pubnub';

import RingCentral from '../..';
import SdkExtension from '..';
import {SubscriptionInfo, CreateSubscriptionRequest} from '../../definitions';

class PubNubExtension extends SdkExtension {
  rc!: RingCentral;
  subscriptions: Subscription[] = [];

  install(rc: RingCentral): void {
    this.rc = rc;
  }

  get enabled() {
    return super.enabled;
  }
  set enabled(value: boolean) {
    super.enabled = value;
    for (const subscription of this.subscriptions) {
      subscription.enabled = value;
    }
  }

  async subscribe(
    eventFilters: string[],
    callback: (event: {}) => void
  ): Promise<Subscription> {
    const subscription = new Subscription(this.rc, eventFilters, callback);
    await subscription.subscribe();
    this.subscriptions.push(subscription);
    return subscription;
  }

  async revoke() {
    for (const subscription of this.subscriptions) {
      await subscription.revoke();
    }
  }
}

class Subscription {
  rc: RingCentral;
  eventFilters: string[];
  callback: (event: {}) => void;
  timeout?: NodeJS.Timeout;
  pubnub?: PubNub;
  enabled = true;

  constructor(
    rc: RingCentral,
    eventFilters: string[],
    callback: (event: {}) => void
  ) {
    this.rc = rc;
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
    this.subscriptionInfo = await this.rc
      .restapi()
      .subscription()
      .post(this.requestBody);
    this.pubnub = new PubNub({
      subscribeKey: this.subscriptionInfo!.deliveryMode!.subscriberKey!,
      origin: 'ringcentral.pubnubapi.com',
    });
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
      this.subscriptionInfo = await this.rc
        .restapi()
        .subscription(this.subscriptionInfo!.id)
        .put(this.requestBody);
    } catch (e) {
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
    await this.rc.restapi().subscription(this.subscriptionInfo.id).delete();
    this.subscriptionInfo = undefined;
  }
}

export default PubNubExtension;
