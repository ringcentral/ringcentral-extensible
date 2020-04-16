import Federation from './Federation'
import Entries from './Entries'
import Parent from '..'
import RestClient from '../../../..'

class Index {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/directory`
  }

  entries(entryId: string = null): Entries {
    return new Entries(this, entryId)
  }

  federation(): Federation {
    return new Federation(this)
  }
}

export default Index
