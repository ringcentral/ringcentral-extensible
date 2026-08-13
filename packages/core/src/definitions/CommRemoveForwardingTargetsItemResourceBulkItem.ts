import type CommCloudDestination from "./CommCloudDestination.js";
import type CommDeviceRequest from "./CommDeviceRequest.js";
import type CommIntegrationRequest from "./CommIntegrationRequest.js";
import type CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";

interface CommRemoveForwardingTargetsItemResourceBulkItem {
  /**
   * Example: Cloud Connector Contact
   */
  name?: string;

  /**
   * Ring target type
   * Example: CloudConnectorRingTarget
   */
  type?:
    | "AllDesktopRingTarget"
    | "AllMobileRingTarget"
    | "CoworkerRingTarget"
    | "DeviceRingTarget"
    | "HotdeskRingTarget"
    | "ImsPhoneNumberRingTarget"
    | "FmcPhoneNumberRingTarget"
    | "IntegrationRingTarget"
    | "PhoneNumberRingTarget"
    | "CloudConnectorRingTarget";

  /**
   */
  extension?: CommReferencedExtensionResource;

  /**
   */
  device?: CommDeviceRequest;

  /**
   */
  integration?: CommIntegrationRequest;

  /**
   */
  destination?: CommCloudDestination;
}

export default CommRemoveForwardingTargetsItemResourceBulkItem;
