import type CommDeviceResource from "./CommDeviceResource.js";
import type CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";

interface CommDeviceTargetResource {
  /**
   * Required
   */
  device?: CommDeviceResource;

  /**
   */
  extension?: CommReferencedExtensionResource;

  /**
   * Ring target type
   * Example: DeviceRingTarget
   */
  type?: "DeviceRingTarget";
}

export default CommDeviceTargetResource;
