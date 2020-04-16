import Contact from './Contact'
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
    return `${this.parent.path()}/address-book`
  }

  contact(contactId: string = null): Contact {
    return new Contact(this, contactId)
  }
}

export default Index
