import { LanguageList, LanguageInfo } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

class Language {
  rc: RestClient
  languageId: string
  parent: Parent

  constructor(parent: Parent, languageId: string) {
    this.parent = parent
    this.rc = parent.rc
    this.languageId = languageId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.languageId) {
      return `${this.parent.path()}/language/${this.languageId}`
    }

    return `${this.parent.path()}/language`
  }

  /**
   * Operation: Get Language List
   * Http get /restapi/v1.0/dictionary/language
   */
  async list(): Promise<LanguageList> {
    return this.rc.get(this.path(false))
  }

  /**
   * Operation: Get Language
   * Http get /restapi/v1.0/dictionary/language/{languageId}
   */
  async get(): Promise<LanguageInfo> {
    if (!this.languageId) {
      throw new Error('languageId must not be undefined')
    }

    return this.rc.get(this.path())
  }
}

export default Language
