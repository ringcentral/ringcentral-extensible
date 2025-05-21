import CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";
import CommDeviceRequest from "./CommDeviceRequest.js";
import CommIntegrationRequest from "./CommIntegrationRequest.js";
import CommPhoneNumberResource from "./CommPhoneNumberResource.js";

interface CommRemoveForwardingTargetsRequestRecords {
  /** */
  name?: string;

  /**
   * Ring target type
   * Example: PhoneNumberRingTarget
   */
  type?:
    | "CoworkerAppsRingTarget"
    | "CoworkerRingTarget"
    | "DeviceRingTarget"
    | "ImsPhoneNumberRingTarget"
    | "IntegrationRingTarget"
    | "PhoneNumberRingTarget";

  /** */
  extension?: CommReferencedExtensionResource;

  /** */
  device?: CommDeviceRequest;

  /** */
  integration?: CommIntegrationRequest;

  /** */
  destination?: CommPhoneNumberResource;
}

export default CommRemoveForwardingTargetsRequestRecords;
