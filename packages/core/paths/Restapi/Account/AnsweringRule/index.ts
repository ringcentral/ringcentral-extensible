import {RestRequestConfig} from '../../../../Rest';
import {
  ListCompanyAnsweringRulesParameters,
  CompanyAnsweringRuleList,
  CompanyAnsweringRuleRequest,
  CompanyAnsweringRuleInfo,
  CompanyAnsweringRuleUpdate,
} from '../../../../definitions';
import Parent from '..';
import {RingCentral} from '../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;
  ruleId: string | null;

  constructor(parent: Parent, ruleId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.ruleId = ruleId;
  }
  path(withParameter = true): string {
    if (withParameter && this.ruleId !== null) {
      return `${this.parent.path()}/answering-rule/${this.ruleId}`;
    }
    return `${this.parent.path()}/answering-rule`;
  }
  /**
   * Returns a list of company call handling rules.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/answering-rule
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   * User Permission: ReadCompanyAnsweringRules
   */
  async list(
    queryParams?: ListCompanyAnsweringRulesParameters,
    restRequestConfig?: RestRequestConfig
  ): Promise<CompanyAnsweringRuleList> {
    const r = await this.rc.get<CompanyAnsweringRuleList>(
      this.path(false),
      queryParams,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Creates call handling rule on account level.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/answering-rule
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: EditCompanyAnsweringRules
   */
  async post(
    companyAnsweringRuleRequest: CompanyAnsweringRuleRequest,
    restRequestConfig?: RestRequestConfig
  ): Promise<CompanyAnsweringRuleInfo> {
    const r = await this.rc.post<CompanyAnsweringRuleInfo>(
      this.path(false),
      companyAnsweringRuleRequest,
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Returns a company call handling rule by ID.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/answering-rule/{ruleId}
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadCompanyAnsweringRules
   */
  async get(
    restRequestConfig?: RestRequestConfig
  ): Promise<CompanyAnsweringRuleInfo> {
    if (this.ruleId === null) {
      throw new Error('ruleId must be specified.');
    }
    const r = await this.rc.get<CompanyAnsweringRuleInfo>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Updates a company call handling rule.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/answering-rule/{ruleId}
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: EditCompanyAnsweringRules
   */
  async put(
    companyAnsweringRuleUpdate: CompanyAnsweringRuleUpdate,
    restRequestConfig?: RestRequestConfig
  ): Promise<CompanyAnsweringRuleInfo> {
    if (this.ruleId === null) {
      throw new Error('ruleId must be specified.');
    }
    const r = await this.rc.put<CompanyAnsweringRuleInfo>(
      this.path(),
      companyAnsweringRuleUpdate,
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Deletes a company custom call handling rule by a particular ID.
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/answering-rule/{ruleId}
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: EditCompanyAnsweringRules
   */
  async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.ruleId === null) {
      throw new Error('ruleId must be specified.');
    }
    const r = await this.rc.delete<string>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
