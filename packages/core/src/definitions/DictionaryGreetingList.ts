import DictionaryGreetingInfo from "./DictionaryGreetingInfo.js";
import PageNavigationModel from "./PageNavigationModel.js";
import EnumeratedPagingModel from "./EnumeratedPagingModel.js";

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
