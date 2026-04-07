import type EnumeratedPagingModel from "./EnumeratedPagingModel.js";
import type LanguageInfo from "./LanguageInfo.js";
import type PageNavigationModel from "./PageNavigationModel.js";

interface LanguageList {
  /**
   * Canonical URI of the language list resource
   * Format: uri
   */
  uri?: string;

  /**
   * Language data
   */
  records?: LanguageInfo[];

  /**
   */
  navigation?: PageNavigationModel;

  /**
   */
  paging?: EnumeratedPagingModel;
}

export default LanguageList;
