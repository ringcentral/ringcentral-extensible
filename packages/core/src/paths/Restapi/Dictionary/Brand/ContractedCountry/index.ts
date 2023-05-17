import CountryListDictionaryModel from '../../../../../definitions/CountryListDictionaryModel';
import ListDomesticCountriesParameters from '../../../../../definitions/ListDomesticCountriesParameters';
import ContractedCountryListResponse from '../../../../../definitions/ContractedCountryListResponse';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public contractedCountryId: string | null;

  public constructor(_parent: ParentInterface, contractedCountryId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.contractedCountryId = contractedCountryId;
  }

  public path(withParameter = true): string {
    if (withParameter && this.contractedCountryId !== null) {
      return `${this._parent.path()}/contracted-country/${this.contractedCountryId}`;
    }
    return `${this._parent.path()}/contracted-country`;
  }

  /**
   * Returns the list of contracted countries for the given brand.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/dictionary/brand/{brandId}/contracted-country
   * Rate Limit Group: Light
   */
  public async list(restRequestConfig?: RestRequestConfig): Promise<ContractedCountryListResponse> {
    const r = await this.rc.get<ContractedCountryListResponse>(this.path(false), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Returns the list of domestic countries for account contracted country and brand.
 *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/dictionary/brand/{brandId}/contracted-country/{contractedCountryId}
   * Rate Limit Group: Light
   */
  public async get(queryParams?: ListDomesticCountriesParameters, restRequestConfig?: RestRequestConfig): Promise<CountryListDictionaryModel> {
    if (this.contractedCountryId === null) {
      throw new Error('contractedCountryId must be specified.');
    }
    const r = await this.rc.get<CountryListDictionaryModel>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
