import { RingOutStatusInfo } from './index';

class GetRingOutStatusResponse {
  /**
   * Internal identifier of a RingOut call
   */
  id?: string;

  /**
   */
  uri?: string;

  /**
   */
  status?: RingOutStatusInfo;
}
export default GetRingOutStatusResponse;
