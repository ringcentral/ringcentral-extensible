import type DictionaryGreetingInfo from '../../../../definitions/DictionaryGreetingInfo';
import type DictionaryGreetingList from '../../../../definitions/DictionaryGreetingList';
import type ListStandardGreetingsParameters from '../../../../definitions/ListStandardGreetingsParameters';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public greetingId: string | null;

  public constructor(_parent: ParentInterface, greetingId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.greetingId = greetingId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.greetingId !== null) {
      return `${this._parent.path()}/greeting/${this.greetingId}`;
    }
    return `${this._parent.path()}/greeting`;
  }
  /**
   * Returns the list of predefined standard greetings. Custom greetings
   * recorded by user are not returned in response to this request. See Get Extension
   * Custom Greetings.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/dictionary/greeting
   * Rate Limit Group: Medium
   */
  public async list(
    queryParams?: ListStandardGreetingsParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<DictionaryGreetingList> {
    const r = await this.rc.get<DictionaryGreetingList>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Returns a standard greeting by ID.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/dictionary/greeting/{greetingId}
   * Rate Limit Group: Medium
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<DictionaryGreetingInfo> {
    if (this.greetingId === null) {
      throw new Error('greetingId must be specified.');
    }
    const r = await this.rc.get<DictionaryGreetingInfo>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
