import type AddDeviceToInventoryRequestSite from "./AddDeviceToInventoryRequestSite";

interface AddDeviceToInventoryRequest {
  /**
   * Device type. Use `OtherPhone` to indicate BYOD (customer provided) device
   * Required
   */
  type?: "OtherPhone";

  /**
   * Quantity of devices (total quantity should not exceed 50)
   * Required
   * Maximum: 50
   * Minimum: 1
   * Format: int32
   */
  quantity?: number;

  /** */
  site?: AddDeviceToInventoryRequestSite;
}

export default AddDeviceToInventoryRequest;
