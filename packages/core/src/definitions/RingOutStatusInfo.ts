/**
 * RingOut status information
 */
interface RingOutStatusInfo {
  /**
   * Status of a call and calling/called party
   */
  callStatus?:
    | "Invalid"
    | "Success"
    | "InProgress"
    | "Busy"
    | "NoAnswer"
    | "RingOutFromThisNumberIsNotSupported"
    | "Rejected"
    | "GenericError"
    | "Finished"
    | "InternationalDisabled"
    | "DestinationBlocked"
    | "NotEnoughFunds"
    | "NoSuchUser"
    | "Error";

  /**
   * Status of a call and calling/called party
   */
  callerStatus?:
    | "Invalid"
    | "Success"
    | "InProgress"
    | "Busy"
    | "NoAnswer"
    | "RingOutFromThisNumberIsNotSupported"
    | "Rejected"
    | "GenericError"
    | "Finished"
    | "InternationalDisabled"
    | "DestinationBlocked"
    | "NotEnoughFunds"
    | "NoSuchUser"
    | "Error";

  /**
   * Status of a call and calling/called party
   */
  calleeStatus?:
    | "Invalid"
    | "Success"
    | "InProgress"
    | "Busy"
    | "NoAnswer"
    | "RingOutFromThisNumberIsNotSupported"
    | "Rejected"
    | "GenericError"
    | "Finished"
    | "InternationalDisabled"
    | "DestinationBlocked"
    | "NotEnoughFunds"
    | "NoSuchUser"
    | "Error";
}

export default RingOutStatusInfo;
