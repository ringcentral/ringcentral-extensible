import CallQueueOverflowSettingsRequestResource from "../../../../../definitions/CallQueueOverflowSettingsRequestResource.js";
import CallQueueOverflowSettings from "../../../../../definitions/CallQueueOverflowSettings.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/overflow-settings`;
  }
  /**
   * Returns overflow settings for a call queue specified in path.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{callQueueId}/overflow-settings
   * Rate Limit Group: Heavy
   * App Permission: ReadAccounts
   * User Permission: CallQueueToCallQueue
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<CallQueueOverflowSettings> {
    const r = await this.rc.get<CallQueueOverflowSettings>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Updates overflow settings for a call queue specified in path.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{callQueueId}/overflow-settings
   * Rate Limit Group: Heavy
   * App Permission: EditExtensions
   * User Permission: CallQueueToCallQueue
   */
  public async put(
    callQueueOverflowSettingsRequestResource:
      CallQueueOverflowSettingsRequestResource,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CallQueueOverflowSettings> {
    const r = await this.rc.put<CallQueueOverflowSettings>(
      this.path(),
      callQueueOverflowSettingsRequestResource,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
