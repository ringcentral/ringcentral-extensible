import type PersonalContactResource from './PersonalContactResource';
import type SyncInfo from './SyncInfo';

interface AddressBookSync {
  /**
   * Format: uri
   */
  uri?: string;

  /**
   */
  records?: PersonalContactResource[];

  /**
   */
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
