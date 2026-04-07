import type DictionaryGreetingInfo from "./DictionaryGreetingInfo.js";
import type EnumeratedPagingModel from "./EnumeratedPagingModel.js";
import type PageNavigationModel from "./PageNavigationModel.js";

interface DictionaryGreetingList {
  /**
   * Canonical URI of greetings list resource
   * Format: uri
   */
  uri?: string;

  /**
   * List of greetings
   */
  records?: DictionaryGreetingInfo[];

  /**
   */
  navigation?: PageNavigationModel;

  /**
   */
  paging?: EnumeratedPagingModel;
}

export default DictionaryGreetingList;
