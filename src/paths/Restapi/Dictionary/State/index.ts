import {
  GetStateListResponse,
  ListStatesParameters,
  GetStateInfoResponse,
} from '../../../../definitions';
import Parent from '..';
import RestClient from '../../../..';

class State {
  rc: RestClient;
  stateId: string | null;
  parent: Parent;

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
   * Operation: Get States List
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/dictionary/state
   */
  async list(
    queryParams?: ListStatesParameters
  ): Promise<GetStateListResponse> {
    const r = await this.rc.get<GetStateListResponse>(
      this.path(false),
      queryParams
    );
    return r.data;
  }

  /**
   * Operation: Get State
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/dictionary/state/{stateId}
   */
  async get(): Promise<GetStateInfoResponse> {
    if (this.stateId === null) {
      throw new Error('stateId must be specified.');
    }

    const r = await this.rc.get<GetStateInfoResponse>(this.path());
    return r.data;
  }
}

export default State;
