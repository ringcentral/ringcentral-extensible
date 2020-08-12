import {PersonalContactResource, SyncInfo} from './index';

class AddressBookSync {
  /**
   */
  uri?: string;

  /**
   */
  records?: PersonalContactResource[];

  /**
   */
  syncInfo?: SyncInfo;

  /**
   */
  nextPageId?: number;

  /**
   */
  nextPageUri?: string;
}

export default AddressBookSync;
