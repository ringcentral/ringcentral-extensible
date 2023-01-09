import BillingInfo from './BillingInfo';
import CallLogDelegateInfo from './CallLogDelegateInfo';
import ExtensionInfoCallLog from './ExtensionInfoCallLog';
import CallLogCallerInfo from './CallLogCallerInfo';
import CallLogRecordingInfo from './CallLogRecordingInfo';
import CallLogRecordMessage from './CallLogRecordMessage';

interface CallLogRecordLegInfo {
  /**
   * The internal action corresponding to the call operation
   */
  action?: ('Unknown' | 'Phone Call' | 'Phone Login' | 'Calling Card' | 'VoIP Call' | 'Paging' | 'Hunting' | 'Call Park' | 'Monitoring' | 'Text Relay' | 'External Application' | 'Park Location' | 'CallOut-CallMe' | 'Conference Call' | 'Move' | 'RC Meetings' | 'Accept Call' | 'FindMe' | 'FollowMe' | 'RingMe' | 'Transfer' | 'Call Return' | 'Ring Directly' | 'RingOut Web' | 'RingOut PC' | 'RingOut Mobile' | '411 Info' | 'Emergency' | 'E911 Update' | 'Support' | 'Incoming Fax' | 'Outgoing Fax');

  /**
   * The direction of a call
   */
  direction?: ('Inbound' | 'Outbound');

  /**
   */
  billing?: BillingInfo;

  /**
   */
  delegate?: CallLogDelegateInfo;

  /**
   * Internal identifier of an extension
   */
  extensionId?: string;

  /**
   * Call duration in seconds
   * Format: int32
   */
  duration?: number;

  /**
   */
  extension?: ExtensionInfoCallLog;

  /**
   * Leg type
   */
  legType?: ('SipForwarding' | 'ServiceMinus2' | 'ServiceMinus3' | 'PstnToSip' | 'Accept' | 'FindMe' | 'FollowMe' | 'TestCall' | 'FaxSent' | 'CallBack' | 'CallingCard' | 'RingDirectly' | 'RingOutWebToSubscriber' | 'RingOutWebToCaller' | 'SipToPstnMetered' | 'RingOutClientToSubscriber' | 'RingOutClientToCaller' | 'RingMe' | 'TransferCall' | 'SipToPstnUnmetered' | 'RingOutDeviceToSubscriber' | 'RingOutDeviceToCaller' | 'RingOutOneLegToCaller' | 'ExtensionToExtension' | 'CallPark' | 'PagingServer' | 'Hunting' | 'OutgoingFreeSpDl' | 'ParkLocation' | 'ConferenceCall' | 'MobileApp' | 'Monitoring' | 'MoveToConference' | 'Unknown');

  /**
   * The call start datetime in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z
   * Format: date-time
   */
  startTime?: string;

  /**
   * The type of a call
   */
  type?: ('Voice' | 'Fax');

  /**
   * The result of the call operation
   */
  result?: ('Unknown' | 'Accepted' | 'Call connected' | 'In Progress' | 'Voicemail' | 'Reply' | 'Missed' | 'Busy' | 'Rejected' | 'No Answer' | 'Hang Up' | 'Blocked' | 'ResultEmpty' | 'Suspended account' | 'Call Failed' | 'Call Failure' | 'Internal Error' | 'IP Phone Offline' | 'No Calling Credit' | 'Not Allowed' | 'Restricted Number' | 'Wrong Number' | 'Answered Not Accepted' | 'Stopped' | 'Poor Line Quality' | 'International Disabled' | 'International Restricted' | 'Abandoned' | 'Declined' | 'Received' | 'Fax on Demand' | 'Partial Receive' | 'Receive Error' | 'Fax Receipt Error' | 'Fax Partially Sent' | 'No fax machine' | 'Send Error' | 'Sent' | 'Fax Not Sent' | 'Fax Poor Line');

  /**
   */
  reasonDescription?: string;

  /**
   */
  from?: CallLogCallerInfo;

  /**
   */
  to?: CallLogCallerInfo;

  /**
   * The type of a call transport. 'PSTN' indicates that a call leg was initiated
 *  from the PSTN network provider; 'VoIP' - from an RC phone.
   */
  transport?: ('PSTN' | 'VoIP');

  /**
   */
  recording?: CallLogRecordingInfo;

  /**
   * Indicates that the recording is too short and therefore wouldn't be returned. The flag is not returned if the value is false
   */
  shortRecording?: boolean;

  /**
   * Returned for 'Detailed' call log. Specifies if the leg is master-leg
   */
  master?: boolean;

  /**
   */
  message?: CallLogRecordMessage;

  /**
   * Telephony identifier of a call session
   */
  telephonySessionId?: string;

  /**
   * The internal type of the call
   */
  internalType?: ('Local' | 'LongDistance' | 'International' | 'Sip' | 'RingMe' | 'RingOut' | 'Usual' | 'TollFreeNumber' | 'VerificationNumber' | 'Vma' | 'LocalNumber' | 'ImsOutgoing' | 'ImsIncoming');
}

export default CallLogRecordLegInfo;
