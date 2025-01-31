import PeerInfo from "./PeerInfo.js";
import MobilePickupData from "./MobilePickupData.js";

/**
 * Status data of a call session
 */
interface CallStatusInfo {
  /**
   * Status code of a call
   */
  code?:
    | "Setup"
    | "Proceeding"
    | "Answered"
    | "Disconnected"
    | "Gone"
    | "Parked"
    | "Hold"
    | "VoiceMail"
    | "FaxReceive"
    | "Tds"
    | "VoiceMailScreening";

  /**
   * Reason for a call status, might be specified for some codes
   */
  reason?:
    | "Pickup"
    | "Supervising"
    | "TakeOver"
    | "Timeout"
    | "BlindTransfer"
    | "RccTransfer"
    | "AttendedTransfer"
    | "CallerInputRedirect"
    | "CallFlip"
    | "ParkLocation"
    | "DtmfTransfer"
    | "AgentAnswered"
    | "AgentDropped"
    | "Rejected"
    | "Cancelled"
    | "InternalError"
    | "NoAnswer"
    | "TargetBusy"
    | "InvalidNumber"
    | "InternationalDisabled"
    | "DestinationBlocked"
    | "NotEnoughFunds"
    | "NoSuchUser"
    | "CallPark"
    | "CallRedirected"
    | "CallReplied"
    | "CallSwitch"
    | "CallFinished"
    | "CallDropped"
    | "Voicemail";

  /**
   * Optional message
   */
  description?: string;

  /**
   * Call park data. Returned for calls in 'Parked' state
   */
  parkData?: string;

  /** */
  peerId?: PeerInfo;

  /** */
  mobilePickupData?: MobilePickupData;

  /**
   * Specifies if it's a conference call
   */
  rcc?: boolean;
}

export default CallStatusInfo;
