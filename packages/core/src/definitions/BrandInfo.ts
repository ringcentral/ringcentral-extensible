import CountryInfoShortModel from "./CountryInfoShortModel";

/**
 * Information on account brand
 */
interface BrandInfo {
  /**
   * Internal identifier of a brand
   */
  id?: string;

  /**
   * Brand name, for example  RingCentral UK ,  ClearFax
   */
  name?: string;

  /** */
  homeCountry?: CountryInfoShortModel;
}

export default BrandInfo;
