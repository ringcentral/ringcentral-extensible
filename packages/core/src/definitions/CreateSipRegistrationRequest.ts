import DeviceInfoRequest from "./DeviceInfoRequest.js";
import SIPInfoRequest from "./SIPInfoRequest.js";

interface CreateSipRegistrationRequest {
  /** */
  device?: DeviceInfoRequest;

  /**
   * SIP settings for device
   */
  sipInfo?: SIPInfoRequest[];

  /**
   * Supported for Softphone clients only. If 'SoftphoneLineReassignment' feature is enabled
   *  the reassignment process can be initialized, however if there is no DL for the given user's device
   *  then SPR-131 error code will be returned.
   * Default: None
   */
  softPhoneLineReassignment?: "None" | "Initialize" | "Reassign";
}

export default CreateSipRegistrationRequest;
