import {DepartmentBulkAssignResource} from '../../../../../definitions';
import Parent from '..';
import RestClient from '../../../../..';

class BulkAssign {
  rc: RestClient;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/bulk-assign`;
  }

  /**
   * Operation: Assign Multiple Department Members
   * Rate Limit Group: Heavy
   * Http post /restapi/v1.0/account/{accountId}/department/bulk-assign
   */
  async post(
    departmentBulkAssignResource: DepartmentBulkAssignResource
  ): Promise<string> {
    const r = await this.rc.post(this.path(), departmentBulkAssignResource);
    return r.data;
  }
}

export default BulkAssign;
