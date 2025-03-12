import CreateForwardingNumberDeviceInfo from "./CreateForwardingNumberDeviceInfo.js";

interface CreateForwardingNumberRequest {
  /**
   * Internal identifier of a forwarding/call flip phone number
   */
  id?: string;

  /**
   * Number assigned to the call flip phone number, corresponds to the shortcut dial number
   * Format: int32
   */
  flipNumber?: number;

  /**
   * Forwarding/call flip phone number
   */
  phoneNumber?: string;

  /**
   * Forwarding/call flip number title
   */
  label?: string;

  /**
   * Forwarding/call flip phone type. If specified, 'label' attribute value is ignored
   * Default: Other
   */
  type?: "PhoneLine" | "Home" | "Mobile" | "Work" | "Other";

  /** */
  device?: CreateForwardingNumberDeviceInfo;
}

export default CreateForwardingNumberRequest;
