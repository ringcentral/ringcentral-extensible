import { DictionaryGreetingInfo, CallHandlingNavigationInfo, CallHandlingPagingInfo } from './index';

class DictionaryGreetingList {
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
  navigation?: CallHandlingNavigationInfo;

  /**
   */
  paging?: CallHandlingPagingInfo;
}
export default DictionaryGreetingList;
