class RingOutStatusInfo
{
    /// <summary>
    /// Status of a call
    /// Enum: Invalid, Success, InProgress, Busy, NoAnswer, Rejected, GenericError, Finished, InternationalDisabled, DestinationBlocked, NotEnoughFunds, NoSuchUser
    /// </summary>
    callStatus: string

    /// <summary>
    /// Status of a calling party
    /// Enum: Invalid, Success, InProgress, Busy, NoAnswer, Rejected, GenericError, Finished, InternationalDisabled, DestinationBlocked, NotEnoughFunds, NoSuchUser
    /// </summary>
    callerStatus: string

    /// <summary>
    /// Status of a called party
    /// Enum: Invalid, Success, InProgress, Busy, NoAnswer, Rejected, GenericError, Finished, InternationalDisabled, DestinationBlocked, NotEnoughFunds, NoSuchUser
    /// </summary>
    calleeStatus: string
}

export default RingOutStatusInfo