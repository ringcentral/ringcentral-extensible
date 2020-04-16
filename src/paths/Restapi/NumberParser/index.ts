import Parse from './Parse'
import Parent from '..'
import RestClient from '../../..'

class Index {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/number-parser`
  }

  parse(): Parse {
    return new Parse(this)
  }
}

export default Index
