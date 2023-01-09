import GetLocationListResponse from '../../../../definitions/GetLocationListResponse';
import ListLocationsParameters from '../../../../definitions/ListLocationsParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/location`;
  }

  /**
   * Returns all available locations for a certain state.
 *
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
