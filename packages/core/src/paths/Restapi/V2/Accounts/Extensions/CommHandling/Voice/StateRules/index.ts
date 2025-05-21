import CommStateBasedRuleUpdateRequest from "../../../../../../../../definitions/CommStateBasedRuleUpdateRequest.js";
import CommStateBasedRuleResource from "../../../../../../../../definitions/CommStateBasedRuleResource.js";
import CommStateBasedRulesResource from "../../../../../../../../definitions/CommStateBasedRulesResource.js";
import ListVoiceStateBasedRulesParameters from "../../../../../../../../definitions/ListVoiceStateBasedRulesParameters.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public stateId: string | null;

  public constructor(_parent: ParentInterface, stateId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.stateId = stateId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.stateId !== null) {
      return `${this._parent.path()}/state-rules/${this.stateId}`;
    }
    return `${this._parent.path()}/state-rules`;
  }
  /**
   * Returns a list of extension's voice state-based rules.
   *
   * *State-base rule* is a call handling rule, managing voice calls on the basis of the user's **state (status)**:
   * *Forward all calls (FAC), Do not disturb (DND), Work Hours (WH), After Hours (AH), Agent*.
   *
   * **Please note:** State-based rules are applicable to the User extension types only: User, DigitalUser, FaxUser,
   * VirtualUser.
   *
   * HTTP Method: get
   * Endpoint: /restapi/v2/accounts/{accountId}/extensions/{extensionId}/comm-handling/voice/state-rules
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   */
  public async list(
    queryParams?: ListVoiceStateBasedRulesParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CommStateBasedRulesResource> {
    const r = await this.rc.get<CommStateBasedRulesResource>(
      this.path(false),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Returns the extension's voice state-based rule by ID specified in URL. Each state is assigned
   * with the predefined ID.
   *
   * *State-base rule* is a call handling rule, managing voice calls on the basis of the user's **state (status)**:
   *
   * *Forward all calls (FAC), Do not disturb (DND), Work Hours (WH), After Hours (AH), Agent*.
   *
   * HTTP Method: get
   * Endpoint: /restapi/v2/accounts/{accountId}/extensions/{extensionId}/comm-handling/voice/state-rules/{stateId}
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<CommStateBasedRuleResource> {
    if (this.stateId === null) {
      throw new Error("stateId must be specified.");
    }
    const r = await this.rc.get<CommStateBasedRuleResource>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Updates the extension's voice state-based rule.
   *
   * **Please note:**  When updating any of objects: `enabled`, `displayName`, `dispatching`, `condition`, etc.
   * all of object parameters should be passed (as in PUT method) - if a parameter is not specified,
   * its value will be set back to default, if any, or deleted.
   *
   * HTTP Method: patch
   * Endpoint: /restapi/v2/accounts/{accountId}/extensions/{extensionId}/comm-handling/voice/state-rules/{stateId}
   * Rate Limit Group: Medium
   * App Permission: EditExtensions
   */
  public async patch(
    commStateBasedRuleUpdateRequest: CommStateBasedRuleUpdateRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CommStateBasedRuleResource> {
    if (this.stateId === null) {
      throw new Error("stateId must be specified.");
    }
    const r = await this.rc.patch<CommStateBasedRuleResource>(
      this.path(),
      commStateBasedRuleUpdateRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
