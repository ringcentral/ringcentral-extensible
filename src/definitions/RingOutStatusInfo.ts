class RingOutStatusInfo
{
  /**
   * Status of a call
   * Enum: Invalid, Success, InProgress, Busy, NoAnswer, Rejected, GenericError, Finished, InternationalDisabled, DestinationBlocked, NotEnoughFunds, NoSuchUser
   */
  callStatus?: string

  /**
   * Status of a calling party
   * Enum: Invalid, Success, InProgress, Busy, NoAnswer, Rejected, GenericError, Finished, InternationalDisabled, DestinationBlocked, NotEnoughFunds, NoSuchUser
   */
  callerStatus?: string

  /**
   * Status of a called party
   * Enum: Invalid, Success, InProgress, Busy, NoAnswer, Rejected, GenericError, Finished, InternationalDisabled, DestinationBlocked, NotEnoughFunds, NoSuchUser
   */
  calleeStatus?: string
}

export default RingOutStatusInfo
