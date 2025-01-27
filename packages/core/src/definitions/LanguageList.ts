import LanguageInfo from "./LanguageInfo.js";
import PageNavigationModel from "./PageNavigationModel.js";
import EnumeratedPagingModel from "./EnumeratedPagingModel.js";

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

  /** */
  navigation?: PageNavigationModel;

  /** */
  paging?: EnumeratedPagingModel;
}

export default LanguageList;
