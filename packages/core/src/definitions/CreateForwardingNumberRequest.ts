import type CreateForwardingNumberDeviceInfo from "./CreateForwardingNumberDeviceInfo";

interface CreateForwardingNumberRequest {
  /**
   * Number assigned to the call flip phone number, corresponds to the shortcut dial number
   * Format: int32
   */
  flipNumber?: number;

  /**
   * Forwarding/Call flip phone number
   */
  phoneNumber?: string;

  /**
   * Forwarding/Call flip number title
   */
  label?: string;

  /**
   * Forwarding/Call flip phone type. If specified, 'label' attribute value is ignored. The default value is 'Other'
   */
  type?: "PhoneLine" | "Home" | "Mobile" | "Work" | "Other";

  /** */
  device?: CreateForwardingNumberDeviceInfo;
}

export default CreateForwardingNumberRequest;
