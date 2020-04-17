import Chats from './Chats'
import Parent from '..'
import RestClient from '../../../..'

class Recent {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/recent`
  }

  chats(): Chats {
    return new Chats(this)
  }
}

export default Recent
