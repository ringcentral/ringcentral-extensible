import CommStateUpdateRequest from "../../../../../../../definitions/CommStateUpdateRequest.js";
import CommStateResource from "../../../../../../../definitions/CommStateResource.js";
import CommStatesResource from "../../../../../../../definitions/CommStatesResource.js";
import ListCicStatesParameters from "../../../../../../../definitions/ListCicStatesParameters.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../../../types.js";

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
      return `${this._parent.path()}/states/${this.stateId}`;
    }
    return `${this._parent.path()}/states`;
  }
  /**
   * Returns a list of communication handling states.
   * HTTP Method: get
   * Endpoint: /restapi/v2/accounts/{accountId}/extensions/{extensionId}/comm-handling/states
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   */
  public async list(
    queryParams?: ListCicStatesParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CommStatesResource> {
    const r = await this.rc.get<CommStatesResource>(
      this.path(false),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Returns a communication handling state.
   * HTTP Method: get
   * Endpoint: /restapi/v2/accounts/{accountId}/extensions/{extensionId}/comm-handling/states/{stateId}
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<CommStateResource> {
    if (this.stateId === null) {
      throw new Error("stateId must be specified.");
    }
    const r = await this.rc.get<CommStateResource>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Updates a communication handling state condition.
   * HTTP Method: patch
   * Endpoint: /restapi/v2/accounts/{accountId}/extensions/{extensionId}/comm-handling/states/{stateId}
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   */
  public async patch(
    commStateUpdateRequest: CommStateUpdateRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CommStateResource> {
    if (this.stateId === null) {
      throw new Error("stateId must be specified.");
    }
    const r = await this.rc.patch<CommStateResource>(
      this.path(),
      commStateUpdateRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
