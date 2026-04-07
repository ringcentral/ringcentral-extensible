import type BulkAddDevicesItemEmergencyLocation from "./BulkAddDevicesItemEmergencyLocation.js";
import type PostalAddress from "./PostalAddress.js";

interface BulkAddDevicesItemEmergency {
  /**
   */
  location?: BulkAddDevicesItemEmergencyLocation;

  /**
   */
  address?: PostalAddress;
}

export default BulkAddDevicesItemEmergency;
