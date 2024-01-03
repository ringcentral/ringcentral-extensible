import type CompanyAnsweringRuleUpdate from '../../../../definitions/CompanyAnsweringRuleUpdate';
import type CompanyAnsweringRuleInfo from '../../../../definitions/CompanyAnsweringRuleInfo';
import type CompanyAnsweringRuleRequest from '../../../../definitions/CompanyAnsweringRuleRequest';
import type CompanyAnsweringRuleList from '../../../../definitions/CompanyAnsweringRuleList';
import type ListCompanyAnsweringRulesParameters from '../../../../definitions/ListCompanyAnsweringRulesParameters';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public ruleId: string | null;

  public constructor(_parent: ParentInterface, ruleId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.ruleId = ruleId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.ruleId !== null) {
      return `${this._parent.path()}/answering-rule/${this.ruleId}`;
    }
    return `${this._parent.path()}/answering-rule`;
  }
  /**
   * Returns a list of company call handling rules.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/answering-rule
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   * User Permission: ReadCompanyAnsweringRules
   */
  public async list(
    queryParams?: ListCompanyAnsweringRulesParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CompanyAnsweringRuleList> {
    const r = await this.rc.get<CompanyAnsweringRuleList>(this.path(false), queryParams, restRequestConfig);
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
  public async post(
    companyAnsweringRuleRequest: CompanyAnsweringRuleRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CompanyAnsweringRuleInfo> {
    const r = await this.rc.post<CompanyAnsweringRuleInfo>(
      this.path(false),
      companyAnsweringRuleRequest,
      undefined,
      restRequestConfig,
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
  public async get(restRequestConfig?: RestRequestConfig): Promise<CompanyAnsweringRuleInfo> {
    if (this.ruleId === null) {
      throw new Error('ruleId must be specified.');
    }
    const r = await this.rc.get<CompanyAnsweringRuleInfo>(this.path(), undefined, restRequestConfig);
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
  public async put(
    companyAnsweringRuleUpdate: CompanyAnsweringRuleUpdate,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CompanyAnsweringRuleInfo> {
    if (this.ruleId === null) {
      throw new Error('ruleId must be specified.');
    }
    const r = await this.rc.put<CompanyAnsweringRuleInfo>(
      this.path(),
      companyAnsweringRuleUpdate,
      undefined,
      restRequestConfig,
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
  public async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.ruleId === null) {
      throw new Error('ruleId must be specified.');
    }
    const r = await this.rc.delete<string>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
