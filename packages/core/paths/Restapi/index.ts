import NumberParser from './NumberParser';
import ClientInfo from './ClientInfo';
import Dictionary from './Dictionary';
import Glip from './Glip';
import Subscription from './Subscription';
import Account from './Account';
import Oauth from './Oauth';
import {RestRequestConfig} from '../../Rest';
import {GetVersionsResponse, GetVersionResponse} from '../../definitions';
import RingCentral from '../..';

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
   * Operation: Get API Versions
   * Rate Limit Group: NoThrottling
   * Http get /restapi
   */
  async list(config?: RestRequestConfig): Promise<GetVersionsResponse> {
    const r = await this.rc.get<GetVersionsResponse>(
      this.path(false),
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Get Version Info
   * Rate Limit Group: NoThrottling
   * Http get /restapi/{apiVersion}
   */
  async get(config?: RestRequestConfig): Promise<GetVersionResponse> {
    if (this.apiVersion === null) {
      throw new Error('apiVersion must be specified.');
    }

    const r = await this.rc.get<GetVersionResponse>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }

  oauth(): Oauth {
    return new Oauth(this);
  }

  account(accountId: string | null = '~'): Account {
    return new Account(this, accountId);
  }

  subscription(subscriptionId: string | null = null): Subscription {
    return new Subscription(this, subscriptionId);
  }

  glip(): Glip {
    return new Glip(this);
  }

  dictionary(): Dictionary {
    return new Dictionary(this);
  }

  clientInfo(): ClientInfo {
    return new ClientInfo(this);
  }

  numberParser(): NumberParser {
    return new NumberParser(this);
  }
}

export default Index;
