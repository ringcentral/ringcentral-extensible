import { DictionaryGreetingList, ListStandardGreetingsParameters, DictionaryGreetingInfo } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

class Greeting {
  rc: RestClient
  greetingId: string
  parent: Parent

  constructor(parent: Parent, greetingId: string) {
    this.parent = parent
    this.rc = parent.rc
    this.greetingId = greetingId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.greetingId) {
      return `${this.parent.path()}/greeting/${this.greetingId}`
    }

    return `${this.parent.path()}/greeting`
  }

  /**
   * Operation: Get Standard Greeting List
   * Http get /restapi/v1.0/dictionary/greeting
   */
  async list(queryParams?: ListStandardGreetingsParameters): Promise<DictionaryGreetingList> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Get Standard Greeting
   * Http get /restapi/v1.0/dictionary/greeting/{greetingId}
   */
  async get(): Promise<DictionaryGreetingInfo> {
    if (!this.greetingId) {
      throw new Error('greetingId must not be undefined')
    }

    return this.rc.get(this.path())
  }
}

export default Greeting
