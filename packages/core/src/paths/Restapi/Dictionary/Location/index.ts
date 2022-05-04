import { RestRequestConfig } from '../../../../Rest';
import { ListLocationsParameters, GetLocationListResponse } from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/location`;
  }

  /**
   * Returns all available locations for a certain state.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/dictionary/location
   * Rate Limit Group: Light
   */
  async get(queryParams?: ListLocationsParameters, restRequestConfig?: RestRequestConfig): Promise<GetLocationListResponse> {
    const r = await this.rc.get<GetLocationListResponse>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
