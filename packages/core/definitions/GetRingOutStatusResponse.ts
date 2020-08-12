import {RingOutStatusInfo} from './index';

class GetRingOutStatusResponse {
  /**
   * Internal identifier of a RingOut call
   */
  id?: string;

  /**
   */
  uri?: string;

  /**
   * RingOut status information
   */
  status?: RingOutStatusInfo;
}

export default GetRingOutStatusResponse;
