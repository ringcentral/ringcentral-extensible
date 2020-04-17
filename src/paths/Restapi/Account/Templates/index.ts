import { UserTemplates, ListUserTemplatesParameters, TemplateInfo } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

class Templates {
  rc: RestClient
  templateId: string
  parent: Parent

  constructor(parent: Parent, templateId: string) {
    this.parent = parent
    this.rc = parent.rc
    this.templateId = templateId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.templateId) {
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
    if (!this.templateId) {
      throw new Error('templateId must not be undefined')
    }

    return this.rc.get(this.path())
  }
}

export default Templates
