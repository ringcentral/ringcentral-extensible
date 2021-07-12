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
   */
  peerId?: PeerInfo;

  /**
   */
  mobilePickupData?: MobilePickupData;
}
export default CallSessionStatusInfo;
