import {PeerInfo} from './index';

// Status data of a call session
class CallStatusInfo {
  /**
   * Status code of a call
   */
  code?:
    | 'Setup'
    | 'Proceeding'
    | 'Answered'
    | 'Disconnected'
    | 'Gone'
    | 'Parked'
    | 'Hold'
    | 'VoiceMail'
    | 'FaxReceive'
    | 'VoiceMailScreening';

  /**
   */
  peerId?: PeerInfo;

  /**
   * Reason for call termination. For 'Disconnected' code only
   */
  reason?:
    | 'Pickup'
    | 'Supervising'
    | 'TakeOver'
    | 'Timeout'
    | 'BlindTransfer'
    | 'RccTransfer'
    | 'AttendedTransfer'
    | 'CallerInputRedirect'
    | 'CallFlip'
    | 'ParkLocation'
    | 'DtmfTransfer'
    | 'AgentAnswered'
    | 'AgentDropped'
    | 'Rejected'
    | 'Cancelled'
    | 'InternalError'
    | 'NoAnswer'
    | 'TargetBusy'
    | 'InvalidNumber'
    | 'InternationalDisabled'
    | 'DestinationBlocked'
    | 'NotEnoughFunds'
    | 'NoSuchUser'
    | 'CallPark'
    | 'CallRedirected'
    | 'CallReplied'
    | 'CallSwitch'
    | 'CallFinished'
    | 'CallDropped';

  /**
   * Optional message
   */
  description?: string;
}
export default CallStatusInfo;
