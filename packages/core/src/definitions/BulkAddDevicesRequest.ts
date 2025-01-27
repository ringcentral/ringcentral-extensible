import BulkAddDevicesItem from "./BulkAddDevicesItem.js";

interface BulkAddDevicesRequest {
  /**
   * Required
   */
  records?: BulkAddDevicesItem[];
}

export default BulkAddDevicesRequest;
