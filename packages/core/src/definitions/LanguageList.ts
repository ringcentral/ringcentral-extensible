import type LanguageInfo from './LanguageInfo';
import type PageNavigationModel from './PageNavigationModel';
import type EnumeratedPagingModel from './EnumeratedPagingModel';

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
