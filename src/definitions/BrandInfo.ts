import CountryInfo from './CountryInfo'

class BrandInfo
{
  /**
   * Internal identifier of a brand
   */
  id?: string

  /**
   * Brand name, for example  RingCentral UK ,  ClearFax
   */
  name?: string

  /**
   * Home country information
   */
  homeCountry?: CountryInfo
}

export default BrandInfo
