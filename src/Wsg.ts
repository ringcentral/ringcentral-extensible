import WS from 'ws';

import RingCentral from '.';

export interface WsgOptions {
  server: string;
}
export default class Wsg {
  static sandboxServer = 'wss://ws-api.devtest.ringcentral.com/ws';
  static productionServer = 'wss://ws-api.ringcentral.com/ws';

  rc: RingCentral;
  server: string;
  ws: WS;

  constructor(rc: RingCentral, options: WsgOptions) {
    this.rc = rc;
    this.server = options.server;
    this.ws = new WS(this.server);
  }

  async subscribe(eventFilters: string[], callback: (body: {}) => void) {
    const subscriptionInfo = await this.rc
      .restapi()
      .subscription()
      .post({
        eventFilters,
        deliveryMode: {
          transportType: 'WebSocket',
        },
      });
    const subscriptionId = subscriptionInfo.id;
    this.ws.addEventListener('message', event => {
      const [meta, body] = JSON.parse(event.data);
      if (
        meta.type === 'ServerNotification' &&
        body.subscriptionId === subscriptionId
      ) {
        callback(body);
      }
    });
  }
}
