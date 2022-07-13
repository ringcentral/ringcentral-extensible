import PeerInfo from './PeerInfo';
import MobilePickupData from './MobilePickupData';

interface CallSessionStatusInfo {
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
