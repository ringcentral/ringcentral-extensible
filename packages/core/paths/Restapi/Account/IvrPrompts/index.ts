import Content from './Content';
import {RestRequestConfig} from '../../../../Rest';
import {
  IVRPrompts,
  PromptInfo,
  CreateIvrPromptRequest,
  UpdateIVRPromptRequest,
} from '../../../../definitions';
import Utils from '../../../../Utils';
import Parent from '..';
import RingCentral from '../../../..';

class Index {
  rc: RingCentral;
  promptId: string | null;
  parent: Parent;

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
   * Operation: Get IVR Prompt List
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/account/{accountId}/ivr-prompts
   */
  async list(config?: RestRequestConfig): Promise<IVRPrompts> {
    const r = await this.rc.get<IVRPrompts>(
      this.path(false),
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Create IVR Prompts
   * Rate Limit Group: Heavy
   * Http post /restapi/v1.0/account/{accountId}/ivr-prompts
   */
  async post(
    createIVRPromptRequest: CreateIvrPromptRequest,
    config?: RestRequestConfig
  ): Promise<PromptInfo> {
    const formData = Utils.getFormData(createIVRPromptRequest);
    const r = await this.rc.post<PromptInfo>(
      this.path(false),
      formData,
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Get IVR Prompt
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}
   */
  async get(config?: RestRequestConfig): Promise<PromptInfo> {
    if (this.promptId === null) {
      throw new Error('promptId must be specified.');
    }

    const r = await this.rc.get<PromptInfo>(this.path(), undefined, config);
    return r.data;
  }

  /**
   * Operation: Update IVR Prompt
   * Rate Limit Group: Medium
   * Http put /restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}
   */
  async put(
    updateIVRPromptRequest: UpdateIVRPromptRequest,
    config?: RestRequestConfig
  ): Promise<PromptInfo> {
    if (this.promptId === null) {
      throw new Error('promptId must be specified.');
    }

    const r = await this.rc.put<PromptInfo>(
      this.path(),
      updateIVRPromptRequest,
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Delete IVR Prompt
   * Rate Limit Group: Heavy
   * Http delete /restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}
   */
  async delete(config?: RestRequestConfig): Promise<string> {
    if (this.promptId === null) {
      throw new Error('promptId must be specified.');
    }

    const r = await this.rc.delete<string>(this.path(), undefined, config);
    return r.data;
  }

  content(): Content {
    return new Content(this);
  }
}

export default Index;
