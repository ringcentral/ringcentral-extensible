import BulkAddDevicesItemEmergencyLocation from "./BulkAddDevicesItemEmergencyLocation.js";
import PostalAddress from "./PostalAddress.js";

interface BulkAddDevicesItemEmergency {
  /**
   */
  location?: BulkAddDevicesItemEmergencyLocation;

  /**
   */
  address?: PostalAddress;
}

export default BulkAddDevicesItemEmergency;
