import {RestRequestConfig} from '../../../../../Rest';
import {
  ListAnsweringRulesParameters,
  UserAnsweringRuleList,
  CreateAnsweringRuleRequest,
  CustomAnsweringRuleInfo,
  ReadAnsweringRuleParameters,
  AnsweringRuleInfo,
  UpdateAnsweringRuleRequest,
} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

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
   * Returns call handling rules of an extension.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/answering-rule
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   * User Permission: ReadUserAnsweringRules
   */
  async list(
    queryParams?: ListAnsweringRulesParameters,
    restRequestConfig?: RestRequestConfig
  ): Promise<UserAnsweringRuleList> {
    const r = await this.rc.get<UserAnsweringRuleList>(
      this.path(false),
      queryParams,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Creates a custom call handling rule for a particular caller ID.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/answering-rule
   * Rate Limit Group: Medium
   * App Permission: EditExtensions
   * User Permission: EditUserAnsweringRules
   */
  async post(
    createAnsweringRuleRequest: CreateAnsweringRuleRequest,
    restRequestConfig?: RestRequestConfig
  ): Promise<CustomAnsweringRuleInfo> {
    const r = await this.rc.post<CustomAnsweringRuleInfo>(
      this.path(false),
      createAnsweringRuleRequest,
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Returns an call handling rule by ID.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadUserAnsweringRules
   */
  async get(
    queryParams?: ReadAnsweringRuleParameters,
    restRequestConfig?: RestRequestConfig
  ): Promise<AnsweringRuleInfo> {
    if (this.ruleId === null) {
      throw new Error('ruleId must be specified.');
    }

    const r = await this.rc.get<AnsweringRuleInfo>(
      this.path(),
      queryParams,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Updates a custom call handling rule for a particular caller ID.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}
   * Rate Limit Group: Medium
   * App Permission: EditExtensions
   * User Permission: EditUserAnsweringRules
   */
  async put(
    updateAnsweringRuleRequest: UpdateAnsweringRuleRequest,
    restRequestConfig?: RestRequestConfig
  ): Promise<AnsweringRuleInfo> {
    if (this.ruleId === null) {
      throw new Error('ruleId must be specified.');
    }

    const r = await this.rc.put<AnsweringRuleInfo>(
      this.path(),
      updateAnsweringRuleRequest,
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Deletes a custom call handling rule by a particular ID.
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}
   * Rate Limit Group: Medium
   * App Permission: EditExtensions
   * User Permission: EditUserAnsweringRules
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
