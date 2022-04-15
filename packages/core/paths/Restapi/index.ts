import NumberParser from './NumberParser';
import Subscription from './Subscription';
import ClientInfo from './ClientInfo';
import Dictionary from './Dictionary';
import Account from './Account';
import Oauth from './Oauth';
import Glip from './Glip';
import { RestRequestConfig } from '../../Rest';
import { GetVersionsResponse, GetVersionResponse } from '../../definitions';
import { RingCentral } from '../..';

class Index {
  rc: RingCentral;

  apiVersion: string | null;

  constructor(rc: RingCentral, apiVersion: string | null = 'v1.0') {
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
  async list(
    restRequestConfig?: RestRequestConfig,
  ): Promise<GetVersionsResponse> {
    const r = await this.rc.get<GetVersionsResponse>(
      this.path(false),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Returns current API version info by apiVersion.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}
   * Rate Limit Group: NoThrottling
   */
  async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<GetVersionResponse> {
    if (this.apiVersion === null) {
      throw new Error('apiVersion must be specified.');
    }
    const r = await this.rc.get<GetVersionResponse>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  glip(): Glip {
    return new Glip(this);
  }

  oauth(): Oauth {
    return new Oauth(this);
  }

  account(accountId: string | null = '~'): Account {
    return new Account(this, accountId);
  }

  dictionary(): Dictionary {
    return new Dictionary(this);
  }

  clientInfo(): ClientInfo {
    return new ClientInfo(this);
  }

  subscription(subscriptionId: string | null = null): Subscription {
    return new Subscription(this, subscriptionId);
  }

  numberParser(): NumberParser {
    return new NumberParser(this);
  }
}
export default Index;
