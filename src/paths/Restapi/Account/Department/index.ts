import Parent from '..'
import RestClient from '../../../..'

class Index {
  rc: RestClient
  departmentId: string
  parent: Parent

  constructor(parent: Parent, departmentId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.departmentId = departmentId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.departmentId != null) {
      return `${this.parent.path()}/department/${this.departmentId}`
    }

    return `${this.parent.path()}/department`
  }
}

export default Index
