import type CountryInfoDictionaryModel from "./CountryInfoDictionaryModel";
import type PageNavigationModel from "./PageNavigationModel";
import type EnumeratedPagingModel from "./EnumeratedPagingModel";

interface CountryListDictionaryModel {
  /**
   * Link to the list of countries supported
   * Format: uri
   */
  uri?: string;

  /**
   * List of countries with the country data
   * Required
   */
  records?: CountryInfoDictionaryModel[];

  /**
   * Required
   */
  navigation?: PageNavigationModel;

  /**
   * Required
   */
  paging?: EnumeratedPagingModel;
}

export default CountryListDictionaryModel;
