import {OriginInfo, CallParty} from './index';

// Call session information
class CallSessionObject {
  /**
   * Internal identifier of a call session
   */
  id?: string;

  /**
   */
  origin?: OriginInfo;

  /**
   * For calls of 'Conference' type only
   */
  voiceCallToken?: string;

  /**
   */
  parties?: CallParty[];

  /**
   * Date and time of the latest session update represented in Unix time format
   */
  creationTime?: string;
}

export default CallSessionObject;
