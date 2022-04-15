import Content from './Content';
import Utils from '../../../../Utils';
import { RestRequestConfig } from '../../../../Rest';
import {
  IVRPrompts,
  CreateIVRPromptRequest,
  PromptInfo,
  UpdateIVRPromptRequest,
} from '../../../../definitions';
import Parent from '..';
import { RingCentral } from '../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  promptId: string | null;

  constructor(parent: Parent, promptId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.promptId = promptId;
  }

  path(withParameter = true): string {
    if (withParameter && this.promptId !== null) {
      return `${this.parent.path()}/ivr-prompts/${this.promptId}`;
    }
    return `${this.parent.path()}/ivr-prompts`;
  }

  /**
   * Returns the list of IVR prompts.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/ivr-prompts
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   * User Permission: ReadCompanyGreetings
   */
  async list(restRequestConfig?: RestRequestConfig): Promise<IVRPrompts> {
    const r = await this.rc.get<IVRPrompts>(
      this.path(false),
      undefined,
      restRequestConfig,
    );
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
  async post(
    createIVRPromptRequest: CreateIVRPromptRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<PromptInfo> {
    const formData = Utils.getFormData(createIVRPromptRequest);
    const r = await this.rc.post<PromptInfo>(
      this.path(false),
      formData,
      undefined,
      restRequestConfig,
    );
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
  async get(restRequestConfig?: RestRequestConfig): Promise<PromptInfo> {
    if (this.promptId === null) {
      throw new Error('promptId must be specified.');
    }
    const r = await this.rc.get<PromptInfo>(
      this.path(),
      undefined,
      restRequestConfig,
    );
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
  async put(
    updateIVRPromptRequest: UpdateIVRPromptRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<PromptInfo> {
    if (this.promptId === null) {
      throw new Error('promptId must be specified.');
    }
    const r = await this.rc.put<PromptInfo>(
      this.path(),
      updateIVRPromptRequest,
      undefined,
      restRequestConfig,
    );
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
  async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.promptId === null) {
      throw new Error('promptId must be specified.');
    }
    const r = await this.rc.delete<string>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  content(): Content {
    return new Content(this);
  }
}
export default Index;
