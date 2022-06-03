import GetCountryListResponse from '../../../../../definitions/GetCountryListResponse';
import ListDomesticCountriesParameters from '../../../../../definitions/ListDomesticCountriesParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  contractedCountryId: string | null;

  constructor(parent: ParentInterface, contractedCountryId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.contractedCountryId = contractedCountryId;
  }

  path(withParameter = true): string {
    if (withParameter && this.contractedCountryId !== null) {
      return `${this.parent.path()}/contracted-country/${this.contractedCountryId}`;
    }
    return `${this.parent.path()}/contracted-country`;
  }

  /**
   * Returns the list of domestic countries by contracted country and brand of the account.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/dictionary/brand/{brandId}/contracted-country/{contractedCountryId}
   * Rate Limit Group: Light
   */
  async get(queryParams?: ListDomesticCountriesParameters, restRequestConfig?: RestRequestConfig): Promise<GetCountryListResponse> {
    if (this.contractedCountryId === null) {
      throw new Error('contractedCountryId must be specified.');
    }
    const r = await this.rc.get<GetCountryListResponse>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
