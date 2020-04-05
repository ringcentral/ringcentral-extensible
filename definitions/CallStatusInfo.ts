import PeerInfo from './PeerInfo'

class CallStatusInfo
{
    /// <summary>
    /// Status code of a call
    /// Enum: Setup, Proceeding, Answered, Disconnected, Gone, Parked, Hold, VoiceMail, FaxReceive, VoiceMailScreening
    /// </summary>
    code: string

    /// <summary>
    /// Peer session / party data.'Gone'state only
    /// </summary>
    peerId: PeerInfo

    /// <summary>
    /// Reason of call termination. For 'Disconnected' code only
    /// Enum: Pickup, Supervising, TakeOver, Timeout, BlindTransfer, RccTransfer, AttendedTransfer, CallerInputRedirect, CallFlip, ParkLocation, DtmfTransfer, AgentAnswered, AgentDropped, Rejected, Cancelled, InternalError, NoAnswer, TargetBusy, InvalidNumber, InternationalDisabled, DestinationBlocked, NotEnoughFunds, NoSuchUser, CallRedirected, CallReplied, CallFinished, CallDropped
    /// </summary>
    reason: string

    /// <summary>
    /// Optional message
    /// </summary>
    description: string
}

export default CallStatusInfo