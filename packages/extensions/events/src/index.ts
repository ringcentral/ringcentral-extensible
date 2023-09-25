import type RingCentral from '@rc-ex/core';
import type { RestRequestConfig, RestResponse, RestMethod } from '@rc-ex/core/lib/types';
import SdkExtension from '@rc-ex/core/lib/SdkExtension';
import type GetTokenRequest from '@rc-ex/core/lib/definitions/GetTokenRequest';
import RestException from '@rc-ex/core/lib/RestException';
import { EventEmitter } from 'events';

export enum Events {
  beforeRequest = 'beforeRequest',
  requestSuccess = 'requestSuccess',
  requestError = 'requestError',

  // enum values below are from
  // https://github.com/ringcentral/ringcentral-js/blob/master/sdk/src/platform/Platform.ts
  beforeLogin = 'beforeLogin',
  loginSuccess = 'loginSuccess',
  loginError = 'loginError',
  beforeRefresh = 'beforeRefresh',
  refreshSuccess = 'refreshSuccess',
  refreshError = 'refreshError',
  beforeLogout = 'beforeLogout',
  logoutSuccess = 'logoutSuccess',
  logoutError = 'logoutError',
  rateLimitError = 'rateLimitError',
}

export interface EventsOptions {
  enabledEvents?: Events[];
}

class EventsExtension extends SdkExtension {
  public eventEmitter = new EventEmitter();

  public options: EventsOptions;

  public constructor(options: EventsOptions = {}) {
    super();
    this.options = options;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public emit(event: Events, data: any) {
    if (!this.options.enabledEvents || this.options.enabledEvents.includes(event)) {
      this.eventEmitter.emit(event, data);
    }
  }

  public async install(rc: RingCentral) {
    const request = rc.request.bind(rc);
    rc.request = async <T>(
      method: RestMethod,
      endpoint: string,
      content?: {},
      queryParams?: {},
      config?: RestRequestConfig,
      // eslint-disable-next-line max-params
    ): Promise<RestResponse<T>> => {
      if (!this.enabled) {
        return request(method, endpoint, content, queryParams, config);
      }
      const params = {
        method,
        endpoint,
        content,
        queryParams,
        config,
      };
      this.emit(Events.beforeRequest, params);
      if (method === 'POST') {
        if (endpoint === '/restapi/oauth/token') {
          if ((content as GetTokenRequest).grant_type === 'refresh_token') {
            this.emit(Events.beforeRefresh, params);
          } else {
            this.emit(Events.beforeLogin, params);
          }
        } else if (endpoint === '/restapi/oauth/revoke') {
          this.emit(Events.beforeLogout, params);
        }
      }
      try {
        const r = await request(method, endpoint, content, queryParams, config);
        this.emit(Events.requestSuccess, r);
        if (method === 'POST') {
          if (endpoint === '/restapi/oauth/token') {
            if ((content as GetTokenRequest).grant_type === 'refresh_token') {
              this.emit(Events.refreshSuccess, r);
            } else {
              this.emit(Events.loginSuccess, r);
            }
          } else if (endpoint === '/restapi/oauth/revoke') {
            this.emit(Events.logoutSuccess, r);
          }
        }
        return r;
      } catch (e) {
        this.emit(Events.requestError, e);
        if (method === 'POST') {
          if (endpoint === '/restapi/oauth/token') {
            if ((content as GetTokenRequest).grant_type === 'refresh_token') {
              this.emit(Events.refreshError, e);
            } else {
              this.emit(Events.loginError, e);
            }
          } else if (endpoint === '/restapi/oauth/revoke') {
            this.emit(Events.logoutError, e);
          }
        }
        if (e instanceof RestException && e.response.status === 429) {
          this.emit(Events.rateLimitError, e);
        }
        throw e;
      }
    };
  }

  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-empty-function
  public async revoke(): Promise<void> {}
}

export default EventsExtension;
