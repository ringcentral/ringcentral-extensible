import {RestRequestConfig} from '../../../../Rest';
import {
  GetCountryListResponse,
  ListCountriesParameters,
  GetCountryInfoDictionaryResponse,
} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Index {
  rc: RingCentral;
  countryId: string | null;
  parent: Parent;

  constructor(parent: Parent, countryId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.countryId = countryId;
  }

  path(withParameter = true): string {
    if (withParameter && this.countryId !== null) {
      return `${this.parent.path()}/country/${this.countryId}`;
    }

    return `${this.parent.path()}/country`;
  }

  /**
   * Operation: Get Country List
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/dictionary/country
   */
  async list(
    queryParams?: ListCountriesParameters,
    config?: RestRequestConfig
  ): Promise<GetCountryListResponse> {
    const r = await this.rc.get<GetCountryListResponse>(
      this.path(false),
      queryParams,
      config
    );
    return r.data;
  }

  /**
   * Operation: Get Country
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/dictionary/country/{countryId}
   */
  async get(
    config?: RestRequestConfig
  ): Promise<GetCountryInfoDictionaryResponse> {
    if (this.countryId === null) {
      throw new Error('countryId must be specified.');
    }

    const r = await this.rc.get<GetCountryInfoDictionaryResponse>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
