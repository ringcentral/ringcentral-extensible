import { GlipPersonInfo } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

class Persons {
  rc: RestClient
  personId: (string | null)
  parent: Parent

  constructor (parent: Parent, personId: (string | null) = null) {
    this.parent = parent
    this.rc = parent.rc
    this.personId = personId
  }

  path (withParameter: boolean = true): string {
    if (withParameter && this.personId !== null) {
      return `${this.parent.path()}/persons/${this.personId}`
    }

    return `${this.parent.path()}/persons`
  }

  /**
   * Operation: Get Person
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/glip/persons/{personId}
   */
  async get (): Promise<GlipPersonInfo> {
    if (this.personId === null) {
      throw new Error('personId must be specified.')
    }

    const r = await this.rc.get(this.path())
    return r.data
  }
}

export default Persons
