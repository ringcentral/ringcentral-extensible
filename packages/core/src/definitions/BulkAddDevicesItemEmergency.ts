import type PostalAddress from "./PostalAddress";
import type BulkAddDevicesItemEmergencyLocation from "./BulkAddDevicesItemEmergencyLocation";

interface BulkAddDevicesItemEmergency {
  /** */
  address?: PostalAddress;

  /** */
  location?: BulkAddDevicesItemEmergencyLocation;
}

export default BulkAddDevicesItemEmergency;
