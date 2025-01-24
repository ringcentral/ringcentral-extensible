import type DictionaryGreetingInfo from "./DictionaryGreetingInfo";
import type PageNavigationModel from "./PageNavigationModel";
import type EnumeratedPagingModel from "./EnumeratedPagingModel";

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

  /** */
  navigation?: PageNavigationModel;

  /** */
  paging?: EnumeratedPagingModel;
}

export default DictionaryGreetingList;
