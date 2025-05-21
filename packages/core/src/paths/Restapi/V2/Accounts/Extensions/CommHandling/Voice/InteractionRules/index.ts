import CommInteractionRuleUpdateRequest from "../../../../../../../../definitions/CommInteractionRuleUpdateRequest.js";
import CommInteractionRuleResource from "../../../../../../../../definitions/CommInteractionRuleResource.js";
import CommInteractionRuleCreateRequest from "../../../../../../../../definitions/CommInteractionRuleCreateRequest.js";
import CommInteractionRulesResource from "../../../../../../../../definitions/CommInteractionRulesResource.js";
import ListVoiceInteractionRulesParameters from "../../../../../../../../definitions/ListVoiceInteractionRulesParameters.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../../../../types.js";

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
      return `${this._parent.path()}/interaction-rules/${this.ruleId}`;
    }
    return `${this._parent.path()}/interaction-rules`;
  }
  /**
   * Returns a list of extension's interaction rules with the detailed information on each rule.
   *
   * *Interaction* rule is a call handling rule, managing voice call on the basis
   * of the user's **contact** or a **phone number** which is calling and/or being called.
   *
   * **Please note:** Interaction rules are applicable to the User extension types only: User, DigitalUser,
   * FaxUser, VirtualUser.
   *
   * HTTP Method: get
   * Endpoint: /restapi/v2/accounts/{accountId}/extensions/{extensionId}/comm-handling/voice/interaction-rules
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   */
  public async list(
    queryParams?: ListVoiceInteractionRulesParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CommInteractionRulesResource> {
    const r = await this.rc.get<CommInteractionRulesResource>(
      this.path(false),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Creates the extension's interaction rule.
   *
   * *Interaction* rule is a call handling rule, managing voice call on the basis
   * of the user's **contact** or a **phone number** which is calling and/or being called.
   *
   * **Please note:** Interaction rules are applicable to the User extension types only: User, DigitalUser,
   * FaxUser, VirtualUser.
   *
   * HTTP Method: post
   * Endpoint: /restapi/v2/accounts/{accountId}/extensions/{extensionId}/comm-handling/voice/interaction-rules
   * Rate Limit Group: Medium
   * App Permission: EditExtensions
   */
  public async post(
    commInteractionRuleCreateRequest: CommInteractionRuleCreateRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CommInteractionRuleResource> {
    const r = await this.rc.post<CommInteractionRuleResource>(
      this.path(false),
      commInteractionRuleCreateRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Returns the extension's interaction rule by ID specified in URL.
   *
   * *Interaction* rule is a call handling rule, managing voice call on the basis
   * of the user's **contact** or a **phone number** which is calling and/or being called.
   *
   * HTTP Method: get
   * Endpoint: /restapi/v2/accounts/{accountId}/extensions/{extensionId}/comm-handling/voice/interaction-rules/{ruleId}
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<CommInteractionRuleResource> {
    if (this.ruleId === null) {
      throw new Error("ruleId must be specified.");
    }
    const r = await this.rc.get<CommInteractionRuleResource>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Deletes the extension's interaction rule by ID specified in URL.
   * HTTP Method: delete
   * Endpoint: /restapi/v2/accounts/{accountId}/extensions/{extensionId}/comm-handling/voice/interaction-rules/{ruleId}
   * Rate Limit Group: Medium
   * App Permission: EditExtensions
   */
  public async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.ruleId === null) {
      throw new Error("ruleId must be specified.");
    }
    const r = await this.rc.delete<string>(
      this.path(),
      {},
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Updates the extension's interaction rule by ID specified in URL.
   * HTTP Method: patch
   * Endpoint: /restapi/v2/accounts/{accountId}/extensions/{extensionId}/comm-handling/voice/interaction-rules/{ruleId}
   * Rate Limit Group: Medium
   * App Permission: EditExtensions
   */
  public async patch(
    commInteractionRuleUpdateRequest: CommInteractionRuleUpdateRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CommInteractionRuleResource> {
    if (this.ruleId === null) {
      throw new Error("ruleId must be specified.");
    }
    const r = await this.rc.patch<CommInteractionRuleResource>(
      this.path(),
      commInteractionRuleUpdateRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
