import SiteBasicInfo from "./SiteBasicInfo.js";

/**
 * Call queue member information
*/
interface CallQueueMember {
    /**
   * Internal identifier of an extension - queue member
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
  site?: SiteBasicInfo;

  /**
   * Extension subtype, if applicable.
 *  For unrecognized subtypes the `Unknown` value is returned
   */
  extensionSubType?: ('VideoPro' | 'VideoProPlus' | 'DigitalSignageOnlyRooms' | 'Unknown' | 'Emergency');
}

export default CallQueueMember;
