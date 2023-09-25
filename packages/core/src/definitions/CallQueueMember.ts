import type SiteResource from './SiteResource';

/**
 * Call queue member information
 */
interface CallQueueMember {
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
