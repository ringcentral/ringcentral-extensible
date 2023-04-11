import RCCInfo from './RCCInfo';

/**
 * Request body for operation moveParties
*/
interface MovePartiesRequest {
  /**
   */
  rcc?: RCCInfo;

  /**
   * Array of parties to drop from session
   */
  dropParties?: string[];

  /**
   * RCV token for Server Based Conferencing
   */
  rcvToken?: string;
}

export default MovePartiesRequest;
