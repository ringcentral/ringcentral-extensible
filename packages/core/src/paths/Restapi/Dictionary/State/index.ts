import { RestRequestConfig } from '../../../../Rest';
import {
  ListStatesParameters,
  GetStateListResponse,
  GetStateInfoResponse,
} from '../../../../definitions';
import Parent from '..';
import { RingCentral } from '../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  stateId: string | null;

  constructor(parent: Parent, stateId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.stateId = stateId;
  }

  path(withParameter = true): string {
    if (withParameter && this.stateId !== null) {
      return `${this.parent.path()}/state/${this.stateId}`;
    }
    return `${this.parent.path()}/state`;
  }

  /**
   * Returns all the states of a certain country
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/dictionary/state
   * Rate Limit Group: Light
   */
  async list(
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
   * Returns the information on a specific state.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/dictionary/state/{stateId}
   * Rate Limit Group: Light
   */
  async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<GetStateInfoResponse> {
    if (this.stateId === null) {
      throw new Error('stateId must be specified.');
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
