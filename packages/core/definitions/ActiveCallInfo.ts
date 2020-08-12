import {DetailedCallInfo, PrimaryCQInfo, AdditionalCQInfo} from './index';

class ActiveCallInfo {
  /**
   */
  id?: string;

  /**
   */
  direction?: 'Inbound' | 'Outbound';

  /**
   * Phone number or extension number of a caller. For GCM transport type '_from' property should be used
   */
  from?: string;

  /**
   * Name of a caller
   */
  fromName?: string;

  /**
   * Phone number or extension number of a callee
   */
  to?: string;

  /**
   * Name of a callee
   */
  toName?: string;

  /**
   * Time when the call is actually started
   */
  startTime?: string;

  /**
   * Telephony presence status
   */
  telephonyStatus?:
    | 'NoCall'
    | 'CallConnected'
    | 'Ringing'
    | 'OnHold'
    | 'ParkedCall';

  /**
   */
  sipData?: DetailedCallInfo;

  /**
   */
  sessionId?: string;

  /**
   * Telephony identifier of a call session
   */
  telephonySessionId?: string;

  /**
   * Extension ID of the call owner on whose behalf a call is performed
   */
  onBehalfOf?: string;

  /**
   * Internal identifier of a call party
   */
  partyId?: string;

  /**
   */
  terminationType?: string;

  /**
   * Primary call session information. Supported for Call Queues only
   */
  primary?: PrimaryCQInfo;

  /**
   * Additional call session information. Supported for Call Queues only
   */
  additional?: AdditionalCQInfo;
}

export default ActiveCallInfo;
