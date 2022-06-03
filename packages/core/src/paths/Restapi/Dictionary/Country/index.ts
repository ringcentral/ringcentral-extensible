import GetCountryInfoDictionaryResponse from '../../../../definitions/GetCountryInfoDictionaryResponse';
import GetCountryListResponse from '../../../../definitions/GetCountryListResponse';
import ListCountriesParameters from '../../../../definitions/ListCountriesParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  countryId: string | null;

  constructor(parent: ParentInterface, countryId: string | null = null) {
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
   * Returns all the countries available for calling.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/dictionary/country
   * Rate Limit Group: Light
   */
  async list(queryParams?: ListCountriesParameters, restRequestConfig?: RestRequestConfig): Promise<GetCountryListResponse> {
    const r = await this.rc.get<GetCountryListResponse>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Returns the information on a specific country.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/dictionary/country/{countryId}
   * Rate Limit Group: Light
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<GetCountryInfoDictionaryResponse> {
    if (this.countryId === null) {
      throw new Error('countryId must be specified.');
    }
    const r = await this.rc.get<GetCountryInfoDictionaryResponse>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
