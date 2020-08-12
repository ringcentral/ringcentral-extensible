import {PeerInfo, MobilePickupData} from './index';

class CallSessionStatusInfo {
  /**
   */
  code?: string;

  /**
   */
  reason?: string;

  /**
   */
  parkData?: string;

  /**
   * Contains details of the 'linked' Session. Appears in 'Gone' State Code
   */
  peerId?: PeerInfo;

  /**
   */
  mobilePickupData?: MobilePickupData;
}

export default CallSessionStatusInfo;
