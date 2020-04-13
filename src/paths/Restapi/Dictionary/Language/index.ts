import LanguageInfo from '../../../../definitions/LanguageInfo'
import LanguageList from '../../../../definitions/LanguageList'
import Parent from '..'
import RestClient from '../../../..'

class Index {
  rc: RestClient
  languageId: string
  parent: Parent

  constructor(parent: Parent, languageId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.languageId = languageId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.languageId != null) {
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
    if (!this.languageId || this.languageId === null) {
      throw new Error("languageId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }
}

export default Index
