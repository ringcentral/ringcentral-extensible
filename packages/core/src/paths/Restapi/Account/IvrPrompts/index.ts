import Content from './Content';
import Utils from '../../../../Utils';
import UpdateIVRPromptRequest from '../../../../definitions/UpdateIVRPromptRequest';
import PromptInfo from '../../../../definitions/PromptInfo';
import CreateIVRPromptRequest from '../../../../definitions/CreateIVRPromptRequest';
import IvrPrompts from '../../../../definitions/IvrPrompts';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public promptId: string | null;

  public constructor(_parent: ParentInterface, promptId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.promptId = promptId;
  }

  public path(withParameter = true): string {
    if (withParameter && this.promptId !== null) {
      return `${this._parent.path()}/ivr-prompts/${this.promptId}`;
    }
    return `${this._parent.path()}/ivr-prompts`;
  }

  /**
   * Returns the list of IVR prompts.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/ivr-prompts
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   * User Permission: ReadCompanyGreetings
   */
  public async list(restRequestConfig?: RestRequestConfig): Promise<IvrPrompts> {
    const r = await this.rc.get<IvrPrompts>(this.path(false), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Creates an IVR prompt.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/ivr-prompts
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: EditCompanyGreetings
   */
  public async post(createIVRPromptRequest: CreateIVRPromptRequest, restRequestConfig?: RestRequestConfig): Promise<PromptInfo> {
    const formData = await Utils.getFormData(createIVRPromptRequest);
    const r = await this.rc.post<PromptInfo>(this.path(false), formData, undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Returns an IVR prompt by ID.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/ivr-prompts/{promptId}
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   * User Permission: ReadCompanyGreetings
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<PromptInfo> {
    if (this.promptId === null) {
      throw new Error('promptId must be specified.');
    }
    const r = await this.rc.get<PromptInfo>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates an IVR prompt by ID
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/ivr-prompts/{promptId}
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: EditCompanyGreetings
   */
  public async put(updateIVRPromptRequest: UpdateIVRPromptRequest, restRequestConfig?: RestRequestConfig): Promise<PromptInfo> {
    if (this.promptId === null) {
      throw new Error('promptId must be specified.');
    }
    const r = await this.rc.put<PromptInfo>(this.path(), updateIVRPromptRequest, undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Deletes an IVR prompt by ID.
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/ivr-prompts/{promptId}
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: EditCompanyGreetings
   */
  public async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.promptId === null) {
      throw new Error('promptId must be specified.');
    }
    const r = await this.rc.delete<string>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  public content(): Content {
    return new Content(this);
  }
}
export default Index;
