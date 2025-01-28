import CallRecordingExtensions from "../../../../../definitions/CallRecordingExtensions";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/extensions`;
  }
  /**
   * Returns the list of extensions to be recorded.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/call-recording/extensions
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   * User Permission: ReadCompanyInfo
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<CallRecordingExtensions> {
    const r = await this.rc.get<CallRecordingExtensions>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
