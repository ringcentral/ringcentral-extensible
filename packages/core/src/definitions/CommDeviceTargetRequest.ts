import type CommDeviceRequest from "./CommDeviceRequest.js";
import type CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";

interface CommDeviceTargetRequest {
  /**
   * Required
   */
  device?: CommDeviceRequest;

  /**
   */
  extension?: CommReferencedExtensionResource;

  /**
   * Ring target type
   * Example: DeviceRingTarget
   */
  type?: "DeviceRingTarget";
}

export default CommDeviceTargetRequest;
