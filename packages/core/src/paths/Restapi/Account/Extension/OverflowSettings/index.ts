import CallQueueOverflowSettingsRequestResource from '../../../../../definitions/CallQueueOverflowSettingsRequestResource';
import CallQueueOverflowSettings from '../../../../../definitions/CallQueueOverflowSettings';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/overflow-settings`;
  }

  /**
   * Returns overflow settings for a call queue specified in path.
 *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{callQueueId}/overflow-settings
   * Rate Limit Group: Heavy
   * App Permission: ReadAccounts
   * User Permission: CallQueueToCallQueue
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<CallQueueOverflowSettings> {
    const r = await this.rc.get<CallQueueOverflowSettings>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates overflow settings for a call queue specified in path.
 *
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{callQueueId}/overflow-settings
   * Rate Limit Group: Heavy
   * App Permission: EditExtensions
   * User Permission: CallQueueToCallQueue
   */
  async put(callQueueOverflowSettingsRequestResource: CallQueueOverflowSettingsRequestResource, restRequestConfig?: RestRequestConfig): Promise<CallQueueOverflowSettings> {
    const r = await this.rc.put<CallQueueOverflowSettings>(this.path(), callQueueOverflowSettingsRequestResource, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
