import {
  DepartmentMemberList,
  ListDepartmentMembersParameters,
} from '../../../../../definitions';
import Parent from '..';
import RestClient from '../../../../..';

class Members {
  rc: RestClient;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/members`;
  }

  /**
   * Operation: Get Department Member List
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/department/{departmentId}/members
   */
  async get(
    queryParams?: ListDepartmentMembersParameters
  ): Promise<DepartmentMemberList> {
    const r = await this.rc.get<DepartmentMemberList>(this.path(), queryParams);
    return r.data;
  }
}

export default Members;
