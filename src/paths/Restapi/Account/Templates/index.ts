import { UserTemplates, ListUserTemplatesParameters, TemplateInfo } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

class Templates {
  rc: RestClient
  templateId: (string | null)
  parent: Parent

  constructor (parent: Parent, templateId: (string | null) = null) {
    this.parent = parent
    this.rc = parent.rc
    this.templateId = templateId
  }

  path (withParameter: boolean = true): string {
    if (withParameter && this.templateId !== null) {
      return `${this.parent.path()}/templates/${this.templateId}`
    }

    return `${this.parent.path()}/templates`
  }

  /**
   * Operation: Get User Template List
   * Http get /restapi/v1.0/account/{accountId}/templates
   */
  async list (queryParams?: ListUserTemplatesParameters): Promise<UserTemplates> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Get User Template
   * Http get /restapi/v1.0/account/{accountId}/templates/{templateId}
   */
  async get (): Promise<TemplateInfo> {
    if (this.templateId === null) {
      throw new Error('templateId must be specified.')
    }

    return this.rc.get(this.path())
  }
}

export default Templates
