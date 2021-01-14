import Tasks from './Tasks';
import {RestRequestConfig} from '../../../../Rest';
import {
  ExtensionBulkUpdateTaskResource,
  ExtensionBulkUpdateRequest,
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
   * Operation: Update Multiple Extensions
   * Rate Limit Group: Heavy
   * Http post /restapi/v1.0/account/{accountId}/extension-bulk-update
   */
  async post(
    extensionBulkUpdateRequest: ExtensionBulkUpdateRequest,
    config?: RestRequestConfig
  ): Promise<ExtensionBulkUpdateTaskResource> {
    const r = await this.rc.post<ExtensionBulkUpdateTaskResource>(
      this.path(),
      extensionBulkUpdateRequest,
      undefined,
      config
    );
    return r.data;
  }

  tasks(taskId: string | null = null): Tasks {
    return new Tasks(this, taskId);
  }
}

export default Index;
