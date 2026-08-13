import type CommCloudDestination from "./CommCloudDestination.js";
import type CommDeviceResource from "./CommDeviceResource.js";
import type CommIntegrationResource from "./CommIntegrationResource.js";
import type CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";

interface CommForwardingTargetsResourceRecords {
  /**
   * Ring target type
   * Example: CloudConnectorRingTarget
   */
  type?:
    | "CoworkerAppsRingTarget"
    | "CoworkerRingTarget"
    | "DeviceRingTarget"
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
  device?: CommDeviceResource;

  /**
   * Device name
   * Example: HP2
   */
  name?: string;

  /**
   */
  destination?: CommCloudDestination;

  /**
   */
  integration?: CommIntegrationResource;
}

export default CommForwardingTargetsResourceRecords;
