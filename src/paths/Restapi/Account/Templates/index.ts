import {
  UserTemplates,
  ListUserTemplatesParameters,
  TemplateInfo,
} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Templates {
  rc: RingCentral;
  templateId: string | null;
  parent: Parent;

  constructor(parent: Parent, templateId: string | null = null) {
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
   * Operation: Get User Template List
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/account/{accountId}/templates
   */
  async list(
    queryParams?: ListUserTemplatesParameters
  ): Promise<UserTemplates> {
    const r = await this.rc.get<UserTemplates>(this.path(false), queryParams);
    return r.data;
  }

  /**
   * Operation: Get User Template
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/templates/{templateId}
   */
  async get(): Promise<TemplateInfo> {
    if (this.templateId === null) {
      throw new Error('templateId must be specified.');
    }

    const r = await this.rc.get<TemplateInfo>(this.path());
    return r.data;
  }
}

export default Templates;
