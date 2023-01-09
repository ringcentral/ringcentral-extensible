import RingOutStatusInfo from './RingOutStatusInfo';

interface GetRingOutStatusResponseIntId {
  /**
   * Internal identifier of a RingOut call
   * Format: int64
   */
  id?: number;

  /**
   */
  uri?: string;

  /**
   */
  status?: RingOutStatusInfo;
}

export default GetRingOutStatusResponseIntId;
