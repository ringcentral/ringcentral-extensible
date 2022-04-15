import {
  CreateSubscriptionRequest,
  SubscriptionInfo,
} from '@rc-ex/core/lib/definitions';
import { RestResponse } from '@rc-ex/core/lib/Rest';
import { MessageEvent } from 'ws';

import WebSocketExtension from './index';
import { WsgEvent, WsgMeta } from './types';
import Utils from './utils';

class Subscription {
  wse: WebSocketExtension;

  eventFilters: string[];

  eventListener: (event: MessageEvent) => void;

  timeout?: NodeJS.Timeout;

  enabled = true;

  constructor(
    wse: WebSocketExtension,
    eventFilters: string[],
    callback: (event: {}) => void,
  ) {
    this.wse = wse;
    this.eventFilters = eventFilters;
    this.eventListener = (mEvent: MessageEvent) => {
      const event = mEvent as WsgEvent;
      const [meta, body]: [WsgMeta, { subscriptionId: string }] = Utils.splitWsgData(event.data);
      if (
        this.enabled
        && meta.type === 'ServerNotification'
        && body.subscriptionId === this.subscriptionInfo!.id
      ) {
        callback(body);
      }
    };
    this.setupWsEventListener();
  }

  setupWsEventListener() {
    this.wse.ws.addEventListener('message', this.eventListener);
  }

  get requestBody(): CreateSubscriptionRequest {
    return {
      deliveryMode: { transportType: 'WebSocket' },
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
    this.subscriptionInfo = (
      await this.wse.request<SubscriptionInfo>(
        'POST',
        '/restapi/v1.0/subscription',
        this.requestBody,
      )
    ).data;
  }

  async refresh() {
    if (!this.subscriptionInfo) {
      return;
    }
    try {
      this.subscriptionInfo = (
        await this.wse.request<SubscriptionInfo>(
          'PUT',
          `/restapi/v1.0/subscription/${this.subscriptionInfo!.id}`,
          this.requestBody,
        )
      ).data;
    } catch (e) {
      const re = e as { response: RestResponse };
      if (re.response && re.response.status === 404) {
        // subscription expired
        await this.subscribe();
      }
    }
  }

  async revoke() {
    if (!this.subscriptionInfo) {
      return;
    }
    try {
      await this.wse.request<SubscriptionInfo>(
        'DELETE',
        `/restapi/v1.0/subscription/${this.subscriptionInfo!.id}`,
      );
    } catch (e) {
      const re = e as { response: RestResponse };
      if (re.response && re.response.status === 404) {
        // ignore
        if (this.wse.options.debugMode) {
          console.debug(
            `Subscription ${
              this.subscriptionInfo!.id
            } doesn't exist on server side`,
          );
        }
      } else if (re.response && re.response.status === 401) {
        // ignore
        if (this.wse.options.debugMode) {
          console.debug('Token invalid when trying to revoke subscription');
        }
      } else {
        throw e;
      }
    }
    this.remove();
  }

  remove() {
    if (this.timeout) {
      global.clearTimeout(this.timeout);
      this.timeout = undefined;
    }
    this.enabled = false;
    this.subscriptionInfo = undefined;
    if (this.wse.ws) {
      this.wse.ws.removeEventListener('message', this.eventListener);
    }
    this.wse.subscriptions = this.wse.subscriptions.filter((x) => x !== this);
  }
}

export default Subscription;
