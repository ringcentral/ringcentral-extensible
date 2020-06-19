import PubNub from 'pubnub';

import RingCentral from '../..';
import SdkExtension from '..';
import {SubscriptionInfo} from '../../definitions';

class PubNubExtension extends SdkExtension {
  rc!: RingCentral;
  subscriptions: Subscription[] = [];

  install(rc: RingCentral): void {
    this.rc = rc;
  }

  async subscribe(
    eventFilters: string[],
    callback: (body: {}) => void
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
  callback: (body: {}) => void;
  listener: PubNub.ListenerParameters;
  _subscriptionInfo?: SubscriptionInfo;
  _timeout?: NodeJS.Timeout;
  pubnub?: PubNub;

  constructor(
    rc: RingCentral,
    eventFilters: string[],
    callback: (body: {}) => void
  ) {
    this.rc = rc;
    this.eventFilters = eventFilters;
    this.callback = callback;
    this.listener = {
      message: (message: {message: string}) => {
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
    };
  }

  _requestBody() {
    return {
      deliveryMode: {transportType: 'PubNub', encryption: true},
      eventFilters: this.eventFilters,
    };
  }

  get subscriptionInfo(): SubscriptionInfo | undefined {
    return this._subscriptionInfo;
  }
  set subscriptionInfo(_subscription) {
    this._subscriptionInfo = _subscription;
    if (this._timeout) {
      clearTimeout(this._timeout);
      this._timeout = undefined;
    }
    if (_subscription) {
      this._timeout = setTimeout(() => {
        this.refresh();
      }, ((_subscription.expiresIn ?? 900) - 120) * 1000);
    }
  }

  async subscribe() {
    const r = await this.rc.post(
      '/restapi/v1.0/subscription',
      this._requestBody()
    );
    this.subscriptionInfo = r.data;
    this.pubnub = new PubNub({
      subscribeKey: this.subscriptionInfo!.deliveryMode!.subscriberKey!,
    });
    this.pubnub.addListener(this.listener);
    this.pubnub.subscribe({
      channels: [this.subscriptionInfo!.deliveryMode!.address!],
    });
  }

  async refresh() {
    if (!this.subscriptionInfo) {
      return;
    }
    try {
      const r = await this.rc.put(
        `/restapi/v1.0/subscription/${this.subscriptionInfo!.id}`,
        this._requestBody()
      );
      this.subscriptionInfo = r.data;
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
    this.pubnub!.unsubscribe({
      channels: [this.subscriptionInfo!.deliveryMode!.address!],
    });
    this.pubnub!.removeListener(this.listener!);
    this.pubnub = undefined;
    await this.rc.delete(
      `/restapi/v1.0/subscription/${this.subscriptionInfo.id}`
    );
    this.subscriptionInfo = undefined;
  }
}

export default PubNubExtension;
