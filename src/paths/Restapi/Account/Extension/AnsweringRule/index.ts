import UpdateAnsweringRuleRequest from '../../../../../definitions/UpdateAnsweringRuleRequest'
import ReadAnsweringRuleParameters from '../../../../../definitions/ReadAnsweringRuleParameters'
import AnsweringRuleInfo from '../../../../../definitions/AnsweringRuleInfo'
import CreateAnsweringRuleRequest from '../../../../../definitions/CreateAnsweringRuleRequest'
import CustomAnsweringRuleInfo from '../../../../../definitions/CustomAnsweringRuleInfo'
import ListAnsweringRulesParameters from '../../../../../definitions/ListAnsweringRulesParameters'
import UserAnsweringRuleList from '../../../../../definitions/UserAnsweringRuleList'
import Parent from '..'
import RestClient from '../../../../..'

class Index {
  rc: RestClient
  ruleId: string
  parent: Parent

  constructor(parent: Parent, ruleId: string = null) {
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
    if (this.ruleId === undefined || this.ruleId === null) {
      throw new Error("ruleId must not be undefined or null")
    }

    return this.rc.get(this.path(), queryParams)
  }

  /**
   * Operation: Update Call Handling Rule
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}
   */
  async put(updateAnsweringRuleRequest: UpdateAnsweringRuleRequest): Promise<AnsweringRuleInfo> {
    if (this.ruleId === undefined || this.ruleId === null) {
      throw new Error("ruleId must not be undefined or null")
    }

    return this.rc.put(this.path(), updateAnsweringRuleRequest)
  }

  /**
   * Operation: Delete Call Handling Rule
   * Http delete /restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}
   */
  async delete(): Promise<string> {
    if (this.ruleId === undefined || this.ruleId === null) {
      throw new Error("ruleId must not be undefined or null")
    }

    return this.rc.delete(this.path())
  }
}

export default Index
