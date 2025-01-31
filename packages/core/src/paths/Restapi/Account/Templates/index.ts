import TemplateInfo from "../../../../definitions/TemplateInfo.js";
import UserTemplates from "../../../../definitions/UserTemplates.js";
import ListUserTemplatesParameters from "../../../../definitions/ListUserTemplatesParameters.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public templateId: string | null;

  public constructor(
    _parent: ParentInterface,
    templateId: string | null = null,
  ) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.templateId = templateId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.templateId !== null) {
      return `${this._parent.path()}/templates/${this.templateId}`;
    }
    return `${this._parent.path()}/templates`;
  }
  /**
   * Returns the list of user templates for the current account.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/templates
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   * User Permission: ReadCompanyInfo
   */
  public async list(
    queryParams?: ListUserTemplatesParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<UserTemplates> {
    const r = await this.rc.get<UserTemplates>(
      this.path(false),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Returns the user template by ID.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/templates/{templateId}
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadCompanyInfo
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<TemplateInfo> {
    if (this.templateId === null) {
      throw new Error("templateId must be specified.");
    }
    const r = await this.rc.get<TemplateInfo>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
