import CountryInfo from './CountryInfo';

/**
 * Information on account brand
*/
class BrandInfo {
  /**
   * Internal identifier of a brand
   */
  id?: string;

  /**
   * Brand name, for example  RingCentral UK ,  ClearFax
   */
  name?: string;

  /**
   */
  homeCountry?: CountryInfo;
}

export default BrandInfo;
