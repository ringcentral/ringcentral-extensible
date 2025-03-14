import RingOutStatusInfo from "./RingOutStatusInfo.js";

interface GetRingOutStatusResponse {
  /**
   * Internal identifier of a RingOut call
   */
  id?: string;

  /**
   * Link to a RingOut call resource
   * Format: uri
   */
  uri?: string;

  /** */
  status?: RingOutStatusInfo;
}

export default GetRingOutStatusResponse;
