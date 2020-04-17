import GlipPersonInfo from '../../../../definitions/GlipPersonInfo'
import Parent from '..'
import RestClient from '../../../..'

class Persons {
  rc: RestClient
  personId: string
  parent: Parent

  constructor(parent: Parent, personId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.personId = personId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.personId !== null) {
      return `${this.parent.path()}/persons/${this.personId}`
    }

    return `${this.parent.path()}/persons`
  }

  /**
   * Operation: Get Person
   * Http get /restapi/v1.0/glip/persons/{personId}
   */
  async get(): Promise<GlipPersonInfo> {
    if (this.personId === undefined || this.personId === null) {
      throw new Error("personId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }
}

export default Persons
