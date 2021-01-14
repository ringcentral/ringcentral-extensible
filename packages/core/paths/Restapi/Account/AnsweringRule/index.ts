import {RestRequestConfig} from '../../../../Rest';
import {
  CompanyAnsweringRuleList,
  ListCompanyAnsweringRulesParameters,
  CompanyAnsweringRuleInfo,
  CompanyAnsweringRuleRequest,
  CompanyAnsweringRuleUpdate,
} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Index {
  rc: RingCentral;
  ruleId: string | null;
  parent: Parent;

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
   * Operation: Get Company Call Handling Rule List
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/account/{accountId}/answering-rule
   */
  async list(
    queryParams?: ListCompanyAnsweringRulesParameters,
    config?: RestRequestConfig
  ): Promise<CompanyAnsweringRuleList> {
    const r = await this.rc.get<CompanyAnsweringRuleList>(
      this.path(false),
      queryParams,
      config
    );
    return r.data;
  }

  /**
   * Operation: Create Company Call Handling Rule
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/account/{accountId}/answering-rule
   */
  async post(
    companyAnsweringRuleRequest: CompanyAnsweringRuleRequest,
    config?: RestRequestConfig
  ): Promise<CompanyAnsweringRuleInfo> {
    const r = await this.rc.post<CompanyAnsweringRuleInfo>(
      this.path(false),
      companyAnsweringRuleRequest,
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Get Company Call Handling Rule
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/answering-rule/{ruleId}
   */
  async get(config?: RestRequestConfig): Promise<CompanyAnsweringRuleInfo> {
    if (this.ruleId === null) {
      throw new Error('ruleId must be specified.');
    }

    const r = await this.rc.get<CompanyAnsweringRuleInfo>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Update Company Call Handling Rule
   * Rate Limit Group: Medium
   * Http put /restapi/v1.0/account/{accountId}/answering-rule/{ruleId}
   */
  async put(
    companyAnsweringRuleUpdate: CompanyAnsweringRuleUpdate,
    config?: RestRequestConfig
  ): Promise<CompanyAnsweringRuleInfo> {
    if (this.ruleId === null) {
      throw new Error('ruleId must be specified.');
    }

    const r = await this.rc.put<CompanyAnsweringRuleInfo>(
      this.path(),
      companyAnsweringRuleUpdate,
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Delete Company Call Handling Rule
   * Rate Limit Group: Medium
   * Http delete /restapi/v1.0/account/{accountId}/answering-rule/{ruleId}
   */
  async delete(config?: RestRequestConfig): Promise<string> {
    if (this.ruleId === null) {
      throw new Error('ruleId must be specified.');
    }

    const r = await this.rc.delete<string>(this.path(), undefined, config);
    return r.data;
  }
}

export default Index;
