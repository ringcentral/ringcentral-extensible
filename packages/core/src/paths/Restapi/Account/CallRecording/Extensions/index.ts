import CallRecordingExtensions from '../../../../../definitions/CallRecordingExtensions';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/extensions`;
  }

  /**
   * Returns the list of extensions to be recorded.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/call-recording/extensions
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   * User Permission: ReadCompanyInfo
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<CallRecordingExtensions> {
    const r = await this.rc.get<CallRecordingExtensions>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
