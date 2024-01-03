import type CallRecordingCustomGreetings from '../../../../../definitions/CallRecordingCustomGreetings';
import type ListCallRecordingCustomGreetingsParameters from '../../../../../definitions/ListCallRecordingCustomGreetingsParameters';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

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
      return `${this._parent.path()}/custom-greetings/${this.greetingId}`;
    }
    return `${this._parent.path()}/custom-greetings`;
  }
  /**
   * Returns call recording custom greetings.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/call-recording/custom-greetings
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   * User Permission: ReadCompanyInfo
   */
  public async get(
    queryParams?: ListCallRecordingCustomGreetingsParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CallRecordingCustomGreetings> {
    const r = await this.rc.get<CallRecordingCustomGreetings>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Deletes call recording custom greetings.
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/call-recording/custom-greetings
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: EditCompanyInfo
   */
  public async deleteAll(restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.delete<string>(this.path(false), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Deletes call recording custom greeting(s).
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/call-recording/custom-greetings/{greetingId}
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: EditCompanyInfo
   */
  public async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.greetingId === null) {
      throw new Error('greetingId must be specified.');
    }
    const r = await this.rc.delete<string>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
