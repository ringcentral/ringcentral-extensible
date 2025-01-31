import CreateForwardingNumberDeviceInfo from "./CreateForwardingNumberDeviceInfo.js";
import ForwardingNumberInfoExtension from "./ForwardingNumberInfoExtension.js";

interface ForwardingNumberInfo {
  /**
   * Internal identifier of a forwarding/call flip phone number
   */
  id?: string;

  /**
   * Canonical URI of a forwarding/call flip phone number
   * Format: uri
   */
  uri?: string;

  /**
   * Forwarding/Call flip phone number
   */
  phoneNumber?: string;

  /**
   * Forwarding/Call flip number title
   */
  label?: string;

  /**
   * Type of option this phone number is used for. Multiple values are accepted
   */
  features?: ("CallFlip" | "CallForwarding")[];

  /**
   * Number assigned to the call flip phone number, corresponds to the shortcut dial number
   */
  flipNumber?: string;

  /** */
  device?: CreateForwardingNumberDeviceInfo;

  /**
   * Forwarding phone number type
   */
  type?:
    | "Home"
    | "Mobile"
    | "Work"
    | "PhoneLine"
    | "Outage"
    | "Other"
    | "BusinessMobilePhone"
    | "ExternalCarrier"
    | "ExtensionApps";

  /**
   * Extension information. Returned only if extension type is 'ExtensionApps'
   */
  extension?: ForwardingNumberInfoExtension;
}

export default ForwardingNumberInfo;
