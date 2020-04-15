import UpdateIVRPromptRequest from '../../../../definitions/UpdateIVRPromptRequest'
import IVRPrompts from '../../../../definitions/IVRPrompts'
import CreateIvrPromptRequest from '../../../../definitions/CreateIvrPromptRequest'
import PromptInfo from '../../../../definitions/PromptInfo'
import Utils from '../../../../Utils'
import Parent from '..'
import RestClient from '../../../..'

class Index {
  rc: RestClient
  promptId: string
  parent: Parent

  constructor(parent: Parent, promptId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.promptId = promptId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.promptId !== null) {
      return `${this.parent.path()}/ivr-prompts/${this.promptId}`
    }

    return `${this.parent.path()}/ivr-prompts`
  }

  /**
   * Operation: Create IVR Prompts
   * Http post /restapi/v1.0/account/{accountId}/ivr-prompts
   */
  async post(createIVRPromptRequest: CreateIvrPromptRequest): Promise<PromptInfo> {
    var formData = Utils.getFormData(createIVRPromptRequest)
    return this.rc.post(this.path(false), formData)
  }

  /**
   * Operation: Get IVR Prompt List
   * Http get /restapi/v1.0/account/{accountId}/ivr-prompts
   */
  async list(): Promise<IVRPrompts> {
    return this.rc.get(this.path(false))
  }

  /**
   * Operation: Get IVR Prompt
   * Http get /restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}
   */
  async get(): Promise<PromptInfo> {
    if (this.promptId === undefined || this.promptId === null) {
      throw new Error("promptId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }

  /**
   * Operation: Delete IVR Prompt
   * Http delete /restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}
   */
  async delete(): Promise<string> {
    if (this.promptId === undefined || this.promptId === null) {
      throw new Error("promptId must not be undefined or null")
    }

    return this.rc.delete(this.path())
  }

  /**
   * Operation: Update IVR Prompt
   * Http put /restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}
   */
  async put(updateIVRPromptRequest: UpdateIVRPromptRequest): Promise<PromptInfo> {
    if (this.promptId === undefined || this.promptId === null) {
      throw new Error("promptId must not be undefined or null")
    }

    return this.rc.put(this.path(), updateIVRPromptRequest)
  }
}

export default Index
