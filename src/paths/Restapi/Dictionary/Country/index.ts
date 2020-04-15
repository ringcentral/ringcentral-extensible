import GetCountryInfoDictionaryResponse from '../../../../definitions/GetCountryInfoDictionaryResponse'
import ListCountriesParameters from '../../../../definitions/ListCountriesParameters'
import GetCountryListResponse from '../../../../definitions/GetCountryListResponse'
import Parent from '..'
import RestClient from '../../../..'

class Index {
  rc: RestClient
  countryId: string
  parent: Parent

  constructor(parent: Parent, countryId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.countryId = countryId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.countryId != null) {
      return `${this.parent.path()}/country/${this.countryId}`
    }

    return `${this.parent.path()}/country`
  }

  /**
   * Operation: Get Country List
   * Http get /restapi/v1.0/dictionary/country
   */
  async list(queryParams?: ListCountriesParameters): Promise<GetCountryListResponse> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Get Country
   * Http get /restapi/v1.0/dictionary/country/{countryId}
   */
  async get(): Promise<GetCountryInfoDictionaryResponse> {
    if (!this.countryId || this.countryId === null) {
      throw new Error("countryId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }
}

export default Index
