import Tasks from './Tasks';
import {RestRequestConfig} from '../../../../Rest';
import {
  ExtensionBulkUpdateRequest,
  ExtensionBulkUpdateTaskResource,
} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }
  path(): string {
    return `${this.parent.path()}/extension-bulk-update`;
  }
  /**
   * Updates multiple extensions at once. Maximum 500 extensions can be updated per request.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension-bulk-update
   * Rate Limit Group: Heavy
   * App Permission: EditExtensions
   * User Permission: EditExtensionInfo
   */
  async post(
    extensionBulkUpdateRequest: ExtensionBulkUpdateRequest,
    restRequestConfig?: RestRequestConfig
  ): Promise<ExtensionBulkUpdateTaskResource> {
    const r = await this.rc.post<ExtensionBulkUpdateTaskResource>(
      this.path(),
      extensionBulkUpdateRequest,
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  tasks(taskId: string | null = null): Tasks {
    return new Tasks(this, taskId);
  }
}
export default Index;
