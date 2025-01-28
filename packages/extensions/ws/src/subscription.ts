import type CreateSubscriptionRequest from "@rc-ex/core/definitions/CreateSubscriptionRequest";
import type SubscriptionInfo from "@rc-ex/core/definitions/SubscriptionInfo";
import type { RestResponse } from "@rc-ex/core/types";
import type { MessageEvent } from "ws";

import type { WebSocketExtensionInterface, WsgEvent, WsgMeta } from "./types";
import Utils from "./utils";

class Subscription {
  public subscriptionInfo?: SubscriptionInfo;

  public wse: WebSocketExtensionInterface;

  public eventFilters: string[];

  public eventListener: (event: MessageEvent) => void;

  public timeout?: NodeJS.Timeout;

  public enabled = true;

  public constructor(
    wse: WebSocketExtensionInterface,
    eventFilters: string[],
    callback: (event: {}) => void,
  ) {
    this.wse = wse;
    this.eventFilters = eventFilters;
    this.eventListener = (mEvent: MessageEvent) => {
      const event = mEvent as WsgEvent;
      const [meta, body]: [WsgMeta, { subscriptionId: string }] = Utils
        .splitWsgData(event.data);
      if (
        this.enabled && meta.type === "ServerNotification" &&
        body.subscriptionId === this.subscriptionInfo!.id
      ) {
        callback(body);
      }
    };
    this.setupWsEventListener();
  }

  public setupWsEventListener() {
    this.wse.ws.addEventListener("message", this.eventListener);
  }

  public get requestBody(): CreateSubscriptionRequest {
    return {
      deliveryMode: { transportType: "WebSocket" as any }, // because WebSocket is not in spec
      eventFilters: this.eventFilters,
    };
  }

  public async subscribe() {
    this.subscriptionInfo = (
      await this.wse.request<SubscriptionInfo>(
        "POST",
        "/restapi/v1.0/subscription",
        this.requestBody,
      )
    ).data;
  }

  public async refresh() {
    if (!this.subscriptionInfo) {
      return;
    }
    try {
      this.subscriptionInfo = (
        await this.wse.request<SubscriptionInfo>(
          "PUT",
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

  public async revoke() {
    if (!this.subscriptionInfo) {
      return;
    }
    try {
      await this.wse.request<SubscriptionInfo>(
        "DELETE",
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
          console.debug("Token invalid when trying to revoke subscription");
        }
      } else {
        throw e;
      }
    }
    this.remove();
  }

  public remove() {
    if (this.timeout) {
      global.clearTimeout(this.timeout);
      this.timeout = undefined;
    }
    this.enabled = false;
    this.subscriptionInfo = undefined;
    if (this.wse.ws) {
      this.wse.ws.removeEventListener("message", this.eventListener);
    }
    this.wse.subscription = undefined;
  }
}

export default Subscription;
