import PostalAddress from "./PostalAddress";
import BulkAddDevicesItemEmergencyLocation from "./BulkAddDevicesItemEmergencyLocation";

interface BulkAddDevicesItemEmergency {
  /** */
  address?: PostalAddress;

  /** */
  location?: BulkAddDevicesItemEmergencyLocation;
}

export default BulkAddDevicesItemEmergency;
