import { LanguageList, LanguageInfo } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

class Language {
  rc: RestClient
  languageId: (string | null)
  parent: Parent

  constructor (parent: Parent, languageId: (string | null) = null) {
    this.parent = parent
    this.rc = parent.rc
    this.languageId = languageId
  }

  path (withParameter: boolean = true): string {
    if (withParameter && this.languageId !== null) {
      return `${this.parent.path()}/language/${this.languageId}`
    }

    return `${this.parent.path()}/language`
  }

  /**
   * Operation: Get Language List
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/dictionary/language
   */
  async list (): Promise<LanguageList> {
    return this.rc.get(this.path(false))
  }

  /**
   * Operation: Get Language
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/dictionary/language/{languageId}
   */
  async get (): Promise<LanguageInfo> {
    if (this.languageId === null) {
      throw new Error('languageId must be specified.')
    }

    return this.rc.get(this.path())
  }
}

export default Language
