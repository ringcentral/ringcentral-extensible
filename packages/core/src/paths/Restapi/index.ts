import NumberParser from './NumberParser';
import Subscription from './Subscription';
import ClientInfo from './ClientInfo';
import Dictionary from './Dictionary';
import Account from './Account';
import Oauth from './Oauth';
import ApiVersionInfo from '../../definitions/ApiVersionInfo';
import ApiVersionsList from '../../definitions/ApiVersionsList';
import { RingCentralInterface, RestRequestConfig } from '../../types';

class Index {
  rc: RingCentralInterface;

  apiVersion: string | null;

  constructor(rc: RingCentralInterface, apiVersion: string | null = 'v1.0') {
    this.rc = rc;
    this.apiVersion = apiVersion;
  }

  path(withParameter = true): string {
    if (withParameter && this.apiVersion !== null) {
      return `/restapi/${this.apiVersion}`;
    }
    return '/restapi';
  }

  /**
   * Returns current API version(s) and server info.
   * HTTP Method: get
   * Endpoint: /restapi
   * Rate Limit Group: NoThrottling
   */
  async list(restRequestConfig?: RestRequestConfig): Promise<ApiVersionsList> {
    const r = await this.rc.get<ApiVersionsList>(this.path(false), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Returns current API version info by apiVersion.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}
   * Rate Limit Group: NoThrottling
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<ApiVersionInfo> {
    if (this.apiVersion === null) {
      throw new Error('apiVersion must be specified.');
    }
    const r = await this.rc.get<ApiVersionInfo>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  oauth(): Oauth {
    return new Oauth(this);
  }

  account(accountId: (string | null) = '~'): Account {
    return new Account(this, accountId);
  }

  dictionary(): Dictionary {
    return new Dictionary(this);
  }

  clientInfo(): ClientInfo {
    return new ClientInfo(this);
  }

  subscription(subscriptionId: (string | null) = null): Subscription {
    return new Subscription(this, subscriptionId);
  }

  numberParser(): NumberParser {
    return new NumberParser(this);
  }
}
export default Index;
