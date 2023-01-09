import DictionaryGreetingInfo from './DictionaryGreetingInfo';
import NavigationInfo from './NavigationInfo';
import EnumeratedPaging from './EnumeratedPaging';

interface DictionaryGreetingList {
  /**
   * Canonical URI of greetings list resource
   */
  uri?: string;

  /**
   * List of greetings
   */
  records?: DictionaryGreetingInfo[];

  /**
   */
  navigation?: NavigationInfo;

  /**
   */
  paging?: EnumeratedPaging;
}

export default DictionaryGreetingList;
