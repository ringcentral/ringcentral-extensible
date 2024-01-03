import type CountryInfoDictionaryModel from '../../../../definitions/CountryInfoDictionaryModel';
import type CountryListDictionaryModel from '../../../../definitions/CountryListDictionaryModel';
import type ListCountriesParameters from '../../../../definitions/ListCountriesParameters';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public countryId: string | null;

  public constructor(_parent: ParentInterface, countryId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.countryId = countryId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.countryId !== null) {
      return `${this._parent.path()}/country/${this.countryId}`;
    }
    return `${this._parent.path()}/country`;
  }
  /**
   * Returns all countries available for calling.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/dictionary/country
   * Rate Limit Group: Light
   */
  public async list(
    queryParams?: ListCountriesParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CountryListDictionaryModel> {
    const r = await this.rc.get<CountryListDictionaryModel>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Returns information on a specific country.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/dictionary/country/{countryId}
   * Rate Limit Group: Light
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<CountryInfoDictionaryModel> {
    if (this.countryId === null) {
      throw new Error('countryId must be specified.');
    }
    const r = await this.rc.get<CountryInfoDictionaryModel>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
