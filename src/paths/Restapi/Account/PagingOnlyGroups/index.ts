import BulkAssign from './BulkAssign'
import Devices from './Devices'
import Users from './Users'
import Parent from '..'
import RestClient from '../../../..'

class Index {
  rc: RestClient
  pagingOnlyGroupId: string
  parent: Parent

  constructor(parent: Parent, pagingOnlyGroupId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.pagingOnlyGroupId = pagingOnlyGroupId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.pagingOnlyGroupId !== null) {
      return `${this.parent.path()}/paging-only-groups/${this.pagingOnlyGroupId}`
    }

    return `${this.parent.path()}/paging-only-groups`
  }

  users(): Users {
    return new Users(this)
  }

  devices(): Devices {
    return new Devices(this)
  }

  bulkAssign(): BulkAssign {
    return new BulkAssign(this)
  }
}

export default Index
