import DictionaryGreetingInfo from '../../../../definitions/DictionaryGreetingInfo'
import DictionaryGreetingList from '../../../../definitions/DictionaryGreetingList'
import Parent from '..'
import RestClient from '../../../..'

class Index {
  rc: RestClient
  greetingId: string
  parent: Parent

  constructor(parent: Parent, greetingId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.greetingId = greetingId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.greetingId != null) {
      return `${this.parent.path()}/greeting/${this.greetingId}`
    }

    return `${this.parent.path()}/greeting`
  }

  /**
   * Operation: Get Standard Greeting List
   * Http get /restapi/v1.0/dictionary/greeting
   */
  async list(ListStandardGreetingsParameters queryParams = null): Promise<DictionaryGreetingList> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Get Standard Greeting
   * Http get /restapi/v1.0/dictionary/greeting/{greetingId}
   */
  async get(): Promise<DictionaryGreetingInfo> {
    if (!this.greetingId || this.greetingId === null) {
      throw new Error("greetingId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }
}

export default Index
