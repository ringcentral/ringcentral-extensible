import Content from './Content'
import { PromptInfo, CreateIvrPromptRequest, IVRPrompts, UpdateIVRPromptRequest } from '../../../../definitions'
import Utils from '../../../../Utils'
import Parent from '..'
import RestClient from '../../../..'

class IvrPrompts {
  rc: RestClient
  promptId: (string | null)
  parent: Parent

  constructor (parent: Parent, promptId: (string | null) = null) {
    this.parent = parent
    this.rc = parent.rc
    this.promptId = promptId
  }

  path (withParameter: boolean = true): string {
    if (withParameter && this.promptId !== null) {
      return `${this.parent.path()}/ivr-prompts/${this.promptId}`
    }

    return `${this.parent.path()}/ivr-prompts`
  }

  /**
   * Operation: Create IVR Prompts
   * Rate Limit Group: Heavy
   * Http post /restapi/v1.0/account/{accountId}/ivr-prompts
   */
  async post (createIVRPromptRequest: CreateIvrPromptRequest): Promise<PromptInfo> {
    const formData = Utils.getFormData(createIVRPromptRequest)
    const r = await this.rc.post(this.path(false), formData, undefined, { headers: formData.getHeaders() })
    return r.data
  }

  /**
   * Operation: Get IVR Prompt List
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/account/{accountId}/ivr-prompts
   */
  async list (): Promise<IVRPrompts> {
    const r = await this.rc.get(this.path(false))
    return r.data
  }

  /**
   * Operation: Get IVR Prompt
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}
   */
  async get (): Promise<PromptInfo> {
    if (this.promptId === null) {
      throw new Error('promptId must be specified.')
    }

    const r = await this.rc.get(this.path())
    return r.data
  }

  /**
   * Operation: Delete IVR Prompt
   * Rate Limit Group: Heavy
   * Http delete /restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}
   */
  async delete (): Promise<string> {
    if (this.promptId === null) {
      throw new Error('promptId must be specified.')
    }

    const r = await this.rc.delete(this.path())
    return r.data
  }

  /**
   * Operation: Update IVR Prompt
   * Rate Limit Group: Medium
   * Http put /restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}
   */
  async put (updateIVRPromptRequest: UpdateIVRPromptRequest): Promise<PromptInfo> {
    if (this.promptId === null) {
      throw new Error('promptId must be specified.')
    }

    const r = await this.rc.put(this.path(), updateIVRPromptRequest)
    return r.data
  }

  content (): Content {
    return new Content(this)
  }
}

export default IvrPrompts
