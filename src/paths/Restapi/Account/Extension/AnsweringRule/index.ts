import { UserAnsweringRuleList, ListAnsweringRulesParameters, CustomAnsweringRuleInfo, CreateAnsweringRuleRequest, AnsweringRuleInfo, ReadAnsweringRuleParameters, UpdateAnsweringRuleRequest } from '../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../..'

class AnsweringRule {
  rc: RestClient
  ruleId: (string | null)
  parent: Parent

  constructor(parent: Parent, ruleId: (string | null) = null) {
    this.parent = parent
    this.rc = parent.rc
    this.ruleId = ruleId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.ruleId !== null) {
      return `${this.parent.path()}/answering-rule/${this.ruleId}`
    }

    return `${this.parent.path()}/answering-rule`
  }

  /**
   * Operation: Get Call Handling Rules
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule
   */
  async list(queryParams?: ListAnsweringRulesParameters): Promise<UserAnsweringRuleList> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Create Call Handling Rule
   * Http post /restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule
   */
  async post(createAnsweringRuleRequest: CreateAnsweringRuleRequest): Promise<CustomAnsweringRuleInfo> {
    return this.rc.post(this.path(false), createAnsweringRuleRequest)
  }

  /**
   * Operation: Get Call Handling Rule
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}
   */
  async get(queryParams?: ReadAnsweringRuleParameters): Promise<AnsweringRuleInfo> {
    if (this.ruleId === null) {
      throw new Error('ruleId must be specified.')
    }

    return this.rc.get(this.path(), queryParams)
  }

  /**
   * Operation: Update Call Handling Rule
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}
   */
  async put(updateAnsweringRuleRequest: UpdateAnsweringRuleRequest): Promise<AnsweringRuleInfo> {
    if (this.ruleId === null) {
      throw new Error('ruleId must be specified.')
    }

    return this.rc.put(this.path(), updateAnsweringRuleRequest)
  }

  /**
   * Operation: Delete Call Handling Rule
   * Http delete /restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}
   */
  async delete(): Promise<string> {
    if (this.ruleId === null) {
      throw new Error('ruleId must be specified.')
    }

    return this.rc.delete(this.path())
  }
}

export default AnsweringRule
