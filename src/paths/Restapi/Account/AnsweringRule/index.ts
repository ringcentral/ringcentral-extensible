import { CompanyAnsweringRuleInfo, CompanyAnsweringRuleRequest, CompanyAnsweringRuleList, ListCompanyAnsweringRulesParameters, CompanyAnsweringRuleUpdate } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

class AnsweringRule {
  rc: RestClient
  ruleId: (string | null)
  parent: Parent

  constructor (parent: Parent, ruleId: (string | null) = null) {
    this.parent = parent
    this.rc = parent.rc
    this.ruleId = ruleId
  }

  path (withParameter: boolean = true): string {
    if (withParameter && this.ruleId !== null) {
      return `${this.parent.path()}/answering-rule/${this.ruleId}`
    }

    return `${this.parent.path()}/answering-rule`
  }

  /**
   * Operation: Create Company Call Handling Rule
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/account/{accountId}/answering-rule
   */
  async post (companyAnsweringRuleRequest: CompanyAnsweringRuleRequest): Promise<CompanyAnsweringRuleInfo> {
    const r = await this.rc.post(this.path(false), companyAnsweringRuleRequest)
    return r.data
  }

  /**
   * Operation: Get Company Call Handling Rule List
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/account/{accountId}/answering-rule
   */
  async list (queryParams?: ListCompanyAnsweringRulesParameters): Promise<CompanyAnsweringRuleList> {
    const r = await this.rc.get(this.path(false), queryParams)
    return r.data
  }

  /**
   * Operation: Get Company Call Handling Rule
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/answering-rule/{ruleId}
   */
  async get (): Promise<CompanyAnsweringRuleInfo> {
    if (this.ruleId === null) {
      throw new Error('ruleId must be specified.')
    }

    const r = await this.rc.get(this.path())
    return r.data
  }

  /**
   * Operation: Update Company Call Handling Rule
   * Rate Limit Group: Medium
   * Http put /restapi/v1.0/account/{accountId}/answering-rule/{ruleId}
   */
  async put (companyAnsweringRuleUpdate: CompanyAnsweringRuleUpdate): Promise<CompanyAnsweringRuleInfo> {
    if (this.ruleId === null) {
      throw new Error('ruleId must be specified.')
    }

    const r = await this.rc.put(this.path(), companyAnsweringRuleUpdate)
    return r.data
  }

  /**
   * Operation: Delete Company Call Handling Rule
   * Rate Limit Group: Medium
   * Http delete /restapi/v1.0/account/{accountId}/answering-rule/{ruleId}
   */
  async delete (): Promise<string> {
    if (this.ruleId === null) {
      throw new Error('ruleId must be specified.')
    }

    const r = await this.rc.delete(this.path())
    return r.data
  }
}

export default AnsweringRule
