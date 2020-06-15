import {RestRequestConfig} from '../../../../../Rest';
import {DepartmentBulkAssignResource} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Index {
  rc: RingCentral;
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
    departmentBulkAssignResource: DepartmentBulkAssignResource,
    config?: RestRequestConfig
  ): Promise<string> {
    const r = await this.rc.post<string>(
      this.path(),
      departmentBulkAssignResource,
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
