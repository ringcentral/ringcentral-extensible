import TemplateInfo from '../../../../definitions/TemplateInfo';
import UserTemplates from '../../../../definitions/UserTemplates';
import ListUserTemplatesParameters from '../../../../definitions/ListUserTemplatesParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  templateId: string | null;

  constructor(parent: ParentInterface, templateId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.templateId = templateId;
  }

  path(withParameter = true): string {
    if (withParameter && this.templateId !== null) {
      return `${this.parent.path()}/templates/${this.templateId}`;
    }
    return `${this.parent.path()}/templates`;
  }

  /**
   * Returns the list of user templates for the current account.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/templates
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   * User Permission: ReadCompanyInfo
   */
  async list(queryParams?: ListUserTemplatesParameters, restRequestConfig?: RestRequestConfig): Promise<UserTemplates> {
    const r = await this.rc.get<UserTemplates>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Returns the user template by ID.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/templates/{templateId}
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadCompanyInfo
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<TemplateInfo> {
    if (this.templateId === null) {
      throw new Error('templateId must be specified.');
    }
    const r = await this.rc.get<TemplateInfo>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
