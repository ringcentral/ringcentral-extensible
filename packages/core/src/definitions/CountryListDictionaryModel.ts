import CountryInfoDictionaryModel from "./CountryInfoDictionaryModel.js";
import PageNavigationModel from "./PageNavigationModel.js";
import EnumeratedPagingModel from "./EnumeratedPagingModel.js";

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
