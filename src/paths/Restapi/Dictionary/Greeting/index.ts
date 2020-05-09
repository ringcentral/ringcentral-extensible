import {
  DictionaryGreetingList,
  ListStandardGreetingsParameters,
  DictionaryGreetingInfo,
} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Greeting {
  rc: RingCentral;
  greetingId: string | null;
  parent: Parent;

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
   * Operation: Get Standard Greeting List
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/dictionary/greeting
   */
  async list(
    queryParams?: ListStandardGreetingsParameters
  ): Promise<DictionaryGreetingList> {
    const r = await this.rc.get<DictionaryGreetingList>(
      this.path(false),
      queryParams
    );
    return r.data;
  }

  /**
   * Operation: Get Standard Greeting
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/dictionary/greeting/{greetingId}
   */
  async get(): Promise<DictionaryGreetingInfo> {
    if (this.greetingId === null) {
      throw new Error('greetingId must be specified.');
    }

    const r = await this.rc.get<DictionaryGreetingInfo>(this.path());
    return r.data;
  }
}

export default Greeting;
