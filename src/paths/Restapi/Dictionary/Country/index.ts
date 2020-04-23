import { GetCountryListResponse, ListCountriesParameters, GetCountryInfoDictionaryResponse } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

class Country {
  rc: RestClient
  countryId: (string | null)
  parent: Parent

  constructor (parent: Parent, countryId: (string | null) = null) {
    this.parent = parent
    this.rc = parent.rc
    this.countryId = countryId
  }

  path (withParameter: boolean = true): string {
    if (withParameter && this.countryId !== null) {
      return `${this.parent.path()}/country/${this.countryId}`
    }

    return `${this.parent.path()}/country`
  }

  /**
   * Operation: Get Country List
   * Http get /restapi/v1.0/dictionary/country
   */
  async list (queryParams?: ListCountriesParameters): Promise<GetCountryListResponse> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Get Country
   * Http get /restapi/v1.0/dictionary/country/{countryId}
   */
  async get (): Promise<GetCountryInfoDictionaryResponse> {
    if (this.countryId === null) {
      throw new Error('countryId must be specified.')
    }

    return this.rc.get(this.path())
  }
}

export default Country
