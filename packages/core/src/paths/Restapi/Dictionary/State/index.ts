import type GetStateInfoResponse from "../../../../definitions/GetStateInfoResponse";
import type GetStateListResponse from "../../../../definitions/GetStateListResponse";
import type ListStatesParameters from "../../../../definitions/ListStatesParameters";
import type {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../types";

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
      return `${this._parent.path()}/state/${this.stateId}`;
    }
    return `${this._parent.path()}/state`;
  }
  /**
   * Returns all states of a certain country.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/dictionary/state
   * Rate Limit Group: Light
   */
  public async list(
    queryParams?: ListStatesParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<GetStateListResponse> {
    const r = await this.rc.get<GetStateListResponse>(
      this.path(false),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Returns information on a specific state by ID.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/dictionary/state/{stateId}
   * Rate Limit Group: Light
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<GetStateInfoResponse> {
    if (this.stateId === null) {
      throw new Error("stateId must be specified.");
    }
    const r = await this.rc.get<GetStateInfoResponse>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
