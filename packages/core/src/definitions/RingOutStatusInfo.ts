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
    | "NosuchUser"
    | "Error"
    | "CannotReach"
    | "NoAnsweringMachine"
    | "NoSessionFound"
    | "Unknown";

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
    | "NosuchUser"
    | "Error"
    | "CannotReach"
    | "NoAnsweringMachine"
    | "NoSessionFound"
    | "Unknown";

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
    | "NosuchUser"
    | "Error"
    | "CannotReach"
    | "NoAnsweringMachine"
    | "NoSessionFound"
    | "Unknown";
}

export default RingOutStatusInfo;
