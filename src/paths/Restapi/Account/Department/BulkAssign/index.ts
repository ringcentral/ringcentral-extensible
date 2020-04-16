import DepartmentBulkAssignResource from '../../../../../definitions/DepartmentBulkAssignResource'
import Parent from '..'
import RestClient from '../../../../..'

class Index {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/bulk-assign`
  }

  /**
   * Operation: Assign Multiple Department Members
   * Http post /restapi/v1.0/account/{accountId}/department/bulk-assign
   */
  async post(departmentBulkAssignResource: DepartmentBulkAssignResource): Promise<string> {
    return this.rc.post(this.path(), departmentBulkAssignResource)
  }
}

export default Index
