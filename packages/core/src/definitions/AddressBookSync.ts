import PersonalContactResource from "./PersonalContactResource.js";
import SyncInfo from "./SyncInfo.js";

interface AddressBookSync {
  /**
   * Format: uri
   */
  uri?: string;

  /** */
  records?: PersonalContactResource[];

  /** */
  syncInfo?: SyncInfo;

  /**
   * Format: int64
   */
  nextPageId?: number;

  /**
   * Format: uri
   */
  nextPageUri?: string;
}

export default AddressBookSync;
