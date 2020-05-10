import {RestRequestConfig} from '../../../../Rest';
import {
  GetLocationListResponse,
  ListLocationsParameters,
} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Location {
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
   * Operation: Get Location List
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/dictionary/location
   */
  async get(
    queryParams?: ListLocationsParameters,
    config?: RestRequestConfig
  ): Promise<GetLocationListResponse> {
    const r = await this.rc.get<GetLocationListResponse>(
      this.path(),
      queryParams,
      config
    );
    return r.data;
  }
}

export default Location;
