import {SiteResource} from './index';

// Call queue member information
class CallQueueMember {
  /**
   * Internal identifier of an extension
   */
  id?: string;

  /**
   * Extension full name
   */
  name?: string;

  /**
   * Extension number
   */
  extensionNumber?: string;

  /**
   */
  site?: SiteResource;
}
export default CallQueueMember;
