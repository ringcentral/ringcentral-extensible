import ExtensionInfoCallLog from "./ExtensionInfoCallLog.js";
import CallLogRecordLegInfoTransferTarget from "./CallLogRecordLegInfoTransferTarget.js";
import CallLogRecordLegInfoTransferee from "./CallLogRecordLegInfoTransferee.js";
import CallLogFromParty from "./CallLogFromParty.js";
import CallLogToParty from "./CallLogToParty.js";
import CallLogRecordMessage from "./CallLogRecordMessage.js";
import CallLogDelegateInfo from "./CallLogDelegateInfo.js";
import CallLogRecordingInfo from "./CallLogRecordingInfo.js";
import BillingInfo from "./BillingInfo.js";

/**
 * Call leg record
 */
interface CallLogRecordLegInfo {
  /** */
  extension?: ExtensionInfoCallLog;

  /**
   * Telephony identifier of a call session
   */
  telephonySessionId?: string;

  /**
   * Call session identifier, required for Telephony REST API
   */
  sipUuidInfo?: string;

  /** */
  transferTarget?: CallLogRecordLegInfoTransferTarget;

  /** */
  transferee?: CallLogRecordLegInfoTransferee;

  /**
   * Internal Identifier of Participant
   */
  partyId?: string;

  /**
   * List of metadata categories applied to the call
   */
  metadataCategories?: string[];

  /**
   * The type of call transport. 'PSTN' indicates that a call leg was initiated
   *  from the PSTN network provider; 'VoIP' - from an RC phone.
   */
  transport?: "PSTN" | "VoIP";

  /** */
  from?: CallLogFromParty;

  /** */
  to?: CallLogToParty;

  /**
   * The type of call
   * Required
   */
  type?: "Voice" | "Fax";

  /**
   * The direction of a call
   * Required
   */
  direction?: "Inbound" | "Outbound";

  /** */
  message?: CallLogRecordMessage;

  /** */
  delegate?: CallLogDelegateInfo;

  /**
   * Call delegation type
   */
  delegationType?: "Coworker" | "Unknown";

  /**
   * The internal action corresponding to the call operation
   * Required
   */
  action?:
    | "Accept Call"
    | "Barge In Call"
    | "Call Park"
    | "Call Return"
    | "CallOut-CallMe"
    | "Calling Card"
    | "Conference Call"
    | "E911 Update"
    | "Emergency"
    | "External Application"
    | "FindMe"
    | "FollowMe"
    | "FreeSPDL"
    | "Hunting"
    | "Incoming Fax"
    | "Monitoring"
    | "Move"
    | "Outgoing Fax"
    | "Paging"
    | "Park Location"
    | "Phone Call"
    | "Phone Login"
    | "Pickup"
    | "RC Meetings"
    | "Ring Directly"
    | "RingMe"
    | "RingOut Mobile"
    | "RingOut PC"
    | "RingOut Web"
    | "Sip Forwarding"
    | "Support"
    | "Text Relay"
    | "Transfer"
    | "Unknown"
    | "VoIP Call";

  /**
   * The result of the call operation
   */
  result?:
    | "911"
    | "933"
    | "Abandoned"
    | "Accepted"
    | "Answered Not Accepted"
    | "Blocked"
    | "Busy"
    | "Call Failed"
    | "Call Failure"
    | "Call connected"
    | "Carrier is not active"
    | "Declined"
    | "EDGE trunk misconfigured"
    | "Fax Not Sent"
    | "Fax Partially Sent"
    | "Fax Poor Line"
    | "Fax Receipt Error"
    | "Fax on Demand"
    | "Hang Up"
    | "IP Phone Offline"
    | "In Progress"
    | "Internal Error"
    | "International Disabled"
    | "International Restricted"
    | "Missed"
    | "No Answer"
    | "No Calling Credit"
    | "Not Allowed"
    | "Partial Receive"
    | "Phone Login"
    | "Receive Error"
    | "Received"
    | "Rejected"
    | "Reply"
    | "Restricted Number"
    | "Send Error"
    | "Sent"
    | "Sent to Voicemail"
    | "Stopped"
    | "Suspended account"
    | "Unknown"
    | "Voicemail"
    | "Wrong Number";

  /**
   * The reason of the call result:
   *    * `Accepted` - The call was connected to and accepted by this number
   *    * `Connected` - The call was answered, but there was no response on how to handle the call (for example, a voice mail system answered the call and did not push "1" to accept)
   *    * `Line Busy` - The phone number you dialed was busy
   *    * `Not Answered` - The phone number you dialed was not answered
   *    * `No Answer` - You did not answer the call
   *    * `Hang Up` - The caller hung up before the call was answered
   *    * `Stopped` - This attempt was stopped because the call was answered by another phone
   *    * `Internal Error` - An internal error occurred when making the call. Please try again
   *    * `No Credit` - There was not enough Calling Credit on your account to make this call
   *    * `Restricted Number` - The number you dialed is restricted by RingCentral
   *    * `Wrong Number` - The number you dialed has either been disconnected or is not a valid phone number. Please check the number and try again
   *    * `International Disabled` - International calling is not enabled on your account. Contact customer service to activate International Calling
   *    * `International Restricted` - The country and/or area you attempted to call has been prohibited by your administrator
   *    * `Bad Number` - An error occurred when making the call. Please check the number before trying again
   *    * `Info 411 Restricted` - Calling to 411 Information Services is restricted
   *    * `Customer 611 Restricted` - 611 customer service is not supported. Please contact customer service at <(888) 555-1212>
   *    * `No Digital Line` - This DigitalLine was either not plugged in or did not have an internet connection
   *    * `Failed Try Again` - Call failed. Please try again
   *    * `Max Call Limit` - The number of simultaneous calls to your account has reached its limit
   *    * `Too Many Calls` - The number of simultaneous calls for per DigitalLine associated with Other Phone has reached its limit. Please contact customer service
   *    * `Calls Not Accepted` - Your account was not accepting calls at this time
   *    * `Number Not Allowed` - The number that was dialed to access your account is not allowed
   *    * `Number Blocked` - This number is in your Blocked Numbers list
   *    * `Number Disabled` - The phone number and/or area you attempted to call has been prohibited by your administrator
   *    * `Resource Error` - An error occurred when making the call. Please try again
   *    * `Call Loop` - A call loop occurred due to an incorrect call forwarding configuration. Please check that you are not forwarding calls back to your own account
   *    * `Fax Not Received` - An incoming fax could not be received because a proper connection with the sender's fax machine could not be established
   *    * `Fax Partially Sent` - The fax was only partially sent. Possible explanations include phone line quality to poor to maintain the connection or the call was dropped
   *    * `Fax Not Sent` - An attempt to send the fax was made, but could not connect with the receiving fax machine
   *    * `Fax Poor Line` - An attempt to send the fax was made, but the phone line quality was too poor to send the fax
   *    * `Fax Prepare Error` - An internal error occurred when preparing the fax. Please try again
   *    * `Fax Save Error` - An internal error occurred when saving the fax. Please try again
   *    * `Fax Send Error` - An error occurred when sending the fax. Please try again
   *    * `Emergency Address not defined` - The call was rejected due to no E911 address
   *    * `Carrier is not active` - The call was rejected due to carrier inactivity
   *    * `EDGE trunk misconfigured` - The call was rejected due to error in EDGE trunk configuration
   *    * `Internal Call Error` - An internal error occurred when making the call. Please try again
   *    * `Receive Error` - Fax receive error
   */
  reason?:
    | "Accepted"
    | "Bad Number"
    | "Call Loop"
    | "Calls Not Accepted"
    | "Carrier is not active"
    | "Connected"
    | "Customer 611 Restricted"
    | "EDGE trunk misconfigured"
    | "Emergency Address not defined"
    | "Failed Try Again"
    | "Fax Not Received"
    | "Fax Not Sent"
    | "Fax Partially Sent"
    | "Fax Poor Line"
    | "Fax Prepare Error"
    | "Fax Save Error"
    | "Fax Send Error"
    | "Hang Up"
    | "Info 411 Restricted"
    | "Internal Call Error"
    | "Internal Error"
    | "International Disabled"
    | "International Restricted"
    | "Line Busy"
    | "Max Call Limit"
    | "No Answer"
    | "No Credit"
    | "No Digital Line"
    | "Not Answered"
    | "Number Blocked"
    | "Number Disabled"
    | "Number Not Allowed"
    | "Receive Error"
    | "Resource Error"
    | "Restricted Number"
    | "Stopped"
    | "Too Many Calls"
    | "Unknown"
    | "Wrong Number";

  /**
   * The detailed reason description of the call result
   */
  reasonDescription?: string;

  /**
   * The call start datetime in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z
   * Required
   * Format: date-time
   */
  startTime?: string;

  /**
   * Call duration in seconds
   * Format: int64
   */
  duration?: number;

  /**
   * Call duration in milliseconds
   * Format: int64
   */
  durationMs?: number;

  /** */
  recording?: CallLogRecordingInfo;

  /**
   * Indicates that the recording is too short and therefore wouldn't be returned. The flag is not returned if the value is false
   */
  shortRecording?: boolean;

  /** */
  billing?: BillingInfo;

  /**
   * The internal type of the call
   */
  internalType?:
    | "Local"
    | "LongDistance"
    | "International"
    | "Sip"
    | "RingMe"
    | "RingOut"
    | "Usual"
    | "TollFreeNumber"
    | "VerificationNumber"
    | "Vma"
    | "LocalNumber"
    | "ImsOutgoing"
    | "ImsIncoming"
    | "Unknown";

  /**
   * Leg type
   * Required
   */
  legType?:
    | "SipForwarding"
    | "ServiceMinus2"
    | "ServiceMinus3"
    | "PstnToSip"
    | "Accept"
    | "FindMe"
    | "FollowMe"
    | "TestCall"
    | "FaxSent"
    | "CallBack"
    | "CallingCard"
    | "RingDirectly"
    | "RingOutWebToSubscriber"
    | "RingOutWebToCaller"
    | "SipToPstnMetered"
    | "RingOutClientToSubscriber"
    | "RingOutClientToCaller"
    | "RingMe"
    | "TransferCall"
    | "SipToPstnUnmetered"
    | "RingOutDeviceToSubscriber"
    | "RingOutDeviceToCaller"
    | "RingOutOneLegToCaller"
    | "ExtensionToExtension"
    | "CallPark"
    | "PagingServer"
    | "Hunting"
    | "OutgoingFreeSpDl"
    | "ParkLocation"
    | "CallMeCallOut"
    | "ConferenceCall"
    | "MobileApp"
    | "MoveToConference"
    | "Unknown"
    | "MeetingsCall"
    | "SilentMonitoring"
    | "Monitoring"
    | "Pickup"
    | "ImsCall"
    | "JoinCall"
    | "TextRelay"
    | "IvaCall";

  /**
   * Returned for 'Detailed' call log. Specifies if the leg is master-leg
   */
  master?: boolean;
}

export default CallLogRecordLegInfo;
