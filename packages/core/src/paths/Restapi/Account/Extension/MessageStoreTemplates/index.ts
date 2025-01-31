import MessageTemplateUpdateRequest from "../../../../../definitions/MessageTemplateUpdateRequest.js";
import MessageTemplateResponse from "../../../../../definitions/MessageTemplateResponse.js";
import MessageTemplateRequest from "../../../../../definitions/MessageTemplateRequest.js";
import MessageTemplatesListResponse from "../../../../../definitions/MessageTemplatesListResponse.js";
import ListUserMessageTemplatesParameters from "../../../../../definitions/ListUserMessageTemplatesParameters.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../types.js";

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
   * Returns a list of user's personal text message templates.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/message-store-templates
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   */
  public async list(
    queryParams?: ListUserMessageTemplatesParameters,
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
   * Creates a user personal text message template.
   * Maximum number of personal templates is 25 per user.
   * Max length of the `body` property is 1000 symbols (2-byte UTF-16 encoded).
   *
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/message-store-templates
   * Rate Limit Group: Medium
   * App Permission: EditExtensions
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
   * Returns a user personal text message template by ID.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/message-store-templates/{templateId}
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
   * Updates a user personal text message template.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/message-store-templates/{templateId}
   * Rate Limit Group: Medium
   * App Permission: EditExtensions
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
   * Deletes a user personal text message template.
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/message-store-templates/{templateId}
   * Rate Limit Group: Medium
   * App Permission: EditExtensions
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
