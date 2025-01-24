import type MessageTemplateUpdateRequest from "../../../../definitions/MessageTemplateUpdateRequest";
import type MessageTemplateResponse from "../../../../definitions/MessageTemplateResponse";
import type MessageTemplateRequest from "../../../../definitions/MessageTemplateRequest";
import type MessageTemplatesListResponse from "../../../../definitions/MessageTemplatesListResponse";
import type ListCompanyMessageTemplatesParameters from "../../../../definitions/ListCompanyMessageTemplatesParameters";
import type {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../types";

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
      return `${this._parent.path()}/message-store-templates/${this.templateId}`;
    }
    return `${this._parent.path()}/message-store-templates`;
  }
  /**
   * Returns a list of company text message templates.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/message-store-templates
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   */
  public async list(
    queryParams?: ListCompanyMessageTemplatesParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<MessageTemplatesListResponse> {
    const r = await this.rc.get<MessageTemplatesListResponse>(
      this.path(false),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Creates a new text message template on a company level. Maximum number of company templates is 50.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/message-store-templates
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   */
  public async post(
    messageTemplateRequest: MessageTemplateRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<MessageTemplateResponse> {
    const r = await this.rc.post<MessageTemplateResponse>(
      this.path(false),
      messageTemplateRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Returns a company text message template by ID.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/message-store-templates/{templateId}
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<MessageTemplateResponse> {
    if (this.templateId === null) {
      throw new Error("templateId must be specified.");
    }
    const r = await this.rc.get<MessageTemplateResponse>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Updates a company text message template.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/message-store-templates/{templateId}
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   */
  public async put(
    messageTemplateUpdateRequest: MessageTemplateUpdateRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<MessageTemplateResponse> {
    if (this.templateId === null) {
      throw new Error("templateId must be specified.");
    }
    const r = await this.rc.put<MessageTemplateResponse>(
      this.path(),
      messageTemplateUpdateRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Deletes a company text message template.
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/message-store-templates/{templateId}
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   */
  public async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.templateId === null) {
      throw new Error("templateId must be specified.");
    }
    const r = await this.rc.delete<string>(
      this.path(),
      {},
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
