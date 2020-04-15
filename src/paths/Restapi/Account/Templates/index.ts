import TemplateInfo from '../../../../definitions/TemplateInfo'
import ListUserTemplatesParameters from '../../../../definitions/ListUserTemplatesParameters'
import UserTemplates from '../../../../definitions/UserTemplates'
import Parent from '..'
import RestClient from '../../../..'

class Index {
  rc: RestClient
  templateId: string
  parent: Parent

  constructor(parent: Parent, templateId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.templateId = templateId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.templateId != null) {
      return `${this.parent.path()}/templates/${this.templateId}`
    }

    return `${this.parent.path()}/templates`
  }

  /**
   * Operation: Get User Template List
   * Http get /restapi/v1.0/account/{accountId}/templates
   */
  async list(queryParams?: ListUserTemplatesParameters): Promise<UserTemplates> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Get User Template
   * Http get /restapi/v1.0/account/{accountId}/templates/{templateId}
   */
  async get(): Promise<TemplateInfo> {
    if (!this.templateId || this.templateId === null) {
      throw new Error("templateId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }
}

export default Index
