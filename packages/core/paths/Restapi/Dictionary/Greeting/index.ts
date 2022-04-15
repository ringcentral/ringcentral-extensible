import { RestRequestConfig } from '../../../../Rest';
import {
  ListStandardGreetingsParameters,
  DictionaryGreetingList,
  DictionaryGreetingInfo,
} from '../../../../definitions';
import Parent from '..';
import { RingCentral } from '../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  greetingId: string | null;

  constructor(parent: Parent, greetingId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.greetingId = greetingId;
  }

  path(withParameter = true): string {
    if (withParameter && this.greetingId !== null) {
      return `${this.parent.path()}/greeting/${this.greetingId}`;
    }
    return `${this.parent.path()}/greeting`;
  }

  /**
   * Returns the list of predefined standard greetings. Custom greetings recorded by user are not returned in response to this request. See Get Extension Custom Greetings.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/dictionary/greeting
   * Rate Limit Group: Medium
   */
  async list(
    queryParams?: ListStandardGreetingsParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<DictionaryGreetingList> {
    const r = await this.rc.get<DictionaryGreetingList>(
      this.path(false),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Returns a standard greeting by ID.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/dictionary/greeting/{greetingId}
   * Rate Limit Group: Medium
   */
  async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<DictionaryGreetingInfo> {
    if (this.greetingId === null) {
      throw new Error('greetingId must be specified.');
    }
    const r = await this.rc.get<DictionaryGreetingInfo>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
