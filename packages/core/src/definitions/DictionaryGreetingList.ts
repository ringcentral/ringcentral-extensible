import DictionaryGreetingInfo from './DictionaryGreetingInfo';
import PageNavigationModel from './PageNavigationModel';
import EnumeratedPagingModel from './EnumeratedPagingModel';

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
