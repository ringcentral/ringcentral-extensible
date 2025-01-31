import PostalAddress from "./PostalAddress.js";
import BulkAddDevicesItemEmergencyLocation from "./BulkAddDevicesItemEmergencyLocation.js";

interface BulkAddDevicesItemEmergency {
  /** */
  address?: PostalAddress;

  /** */
  location?: BulkAddDevicesItemEmergencyLocation;
}

export default BulkAddDevicesItemEmergency;
