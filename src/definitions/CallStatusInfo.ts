import PeerInfo from './PeerInfo'

class CallStatusInfo
{
    /**
     * Status code of a call
     * Enum: Setup, Proceeding, Answered, Disconnected, Gone, Parked, Hold, VoiceMail, FaxReceive, VoiceMailScreening
     */
    code?: string

    /**
     * Peer session / party data.'Gone'state only
     */
    peerId?: PeerInfo

    /**
     * Reason of call termination. For 'Disconnected' code only
     * Enum: Pickup, Supervising, TakeOver, Timeout, BlindTransfer, RccTransfer, AttendedTransfer, CallerInputRedirect, CallFlip, ParkLocation, DtmfTransfer, AgentAnswered, AgentDropped, Rejected, Cancelled, InternalError, NoAnswer, TargetBusy, InvalidNumber, InternationalDisabled, DestinationBlocked, NotEnoughFunds, NoSuchUser, CallRedirected, CallReplied, CallFinished, CallDropped
     */
    reason?: string

    /**
     * Optional message
     */
    description?: string
}

export default CallStatusInfo