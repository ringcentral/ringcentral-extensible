import { RestRequestConfig } from '../../../../../Rest';
import { ListCallRecordingCustomGreetingsParameters, CallRecordingCustomGreetings } from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

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
      return `${this.parent.path()}/custom-greetings/${this.greetingId}`;
    }
    return `${this.parent.path()}/custom-greetings`;
  }

  /**
   * Returns call recording custom greetings.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/call-recording/custom-greetings
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   * User Permission: ReadCompanyInfo
   */
  async get(queryParams?: ListCallRecordingCustomGreetingsParameters, restRequestConfig?: RestRequestConfig): Promise<CallRecordingCustomGreetings> {
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
  async deleteAll(restRequestConfig?: RestRequestConfig): Promise<string> {
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
  async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.greetingId === null) {
      throw new Error('greetingId must be specified.');
    }
    const r = await this.rc.delete<string>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
