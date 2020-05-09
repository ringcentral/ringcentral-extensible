import {
  UserAnsweringRuleList,
  ListAnsweringRulesParameters,
  CustomAnsweringRuleInfo,
  CreateAnsweringRuleRequest,
  AnsweringRuleInfo,
  ReadAnsweringRuleParameters,
  UpdateAnsweringRuleRequest,
} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class AnsweringRule {
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
   * Operation: Get Call Handling Rules
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule
   */
  async list(
    queryParams?: ListAnsweringRulesParameters
  ): Promise<UserAnsweringRuleList> {
    const r = await this.rc.get<UserAnsweringRuleList>(
      this.path(false),
      queryParams
    );
    return r.data;
  }

  /**
   * Operation: Create Call Handling Rule
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule
   */
  async post(
    createAnsweringRuleRequest: CreateAnsweringRuleRequest
  ): Promise<CustomAnsweringRuleInfo> {
    const r = await this.rc.post<CustomAnsweringRuleInfo>(
      this.path(false),
      createAnsweringRuleRequest
    );
    return r.data;
  }

  /**
   * Operation: Get Call Handling Rule
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}
   */
  async get(
    queryParams?: ReadAnsweringRuleParameters
  ): Promise<AnsweringRuleInfo> {
    if (this.ruleId === null) {
      throw new Error('ruleId must be specified.');
    }

    const r = await this.rc.get<AnsweringRuleInfo>(this.path(), queryParams);
    return r.data;
  }

  /**
   * Operation: Update Call Handling Rule
   * Rate Limit Group: Medium
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}
   */
  async put(
    updateAnsweringRuleRequest: UpdateAnsweringRuleRequest
  ): Promise<AnsweringRuleInfo> {
    if (this.ruleId === null) {
      throw new Error('ruleId must be specified.');
    }

    const r = await this.rc.put<AnsweringRuleInfo>(
      this.path(),
      updateAnsweringRuleRequest
    );
    return r.data;
  }

  /**
   * Operation: Delete Call Handling Rule
   * Rate Limit Group: Medium
   * Http delete /restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}
   */
  async delete(): Promise<string> {
    if (this.ruleId === null) {
      throw new Error('ruleId must be specified.');
    }

    const r = await this.rc.delete<string>(this.path());
    return r.data;
  }
}

export default AnsweringRule;
