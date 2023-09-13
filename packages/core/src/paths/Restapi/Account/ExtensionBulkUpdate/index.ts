import Tasks from './Tasks';
import ExtensionBulkUpdateTaskResource from '../../../../definitions/ExtensionBulkUpdateTaskResource';
import ExtensionBulkUpdateRequest from '../../../../definitions/ExtensionBulkUpdateRequest';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(): string {
    return `${this._parent.path()}/extension-bulk-update`;
  }

  /**
   * Updates multiple extensions at once. Maximum 500 extensions can be updated per request.
 *
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension-bulk-update
   * Rate Limit Group: Heavy
   * App Permission: EditExtensions
   * User Permission: EditExtensionInfo
   */
  public async post(extensionBulkUpdateRequest: ExtensionBulkUpdateRequest, restRequestConfig?: RestRequestConfig): Promise<ExtensionBulkUpdateTaskResource> {
    const r = await this.rc.post<ExtensionBulkUpdateTaskResource>(this.path(), extensionBulkUpdateRequest, undefined, restRequestConfig);
    return r.data;
  }

  public tasks(taskId: (string | null) = null): Tasks {
    return new Tasks(this, taskId);
  }
}
export default Index;
