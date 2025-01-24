import type PostalAddress from "./PostalAddress";
import type DeviceDefinitionEmergencyLocation from "./DeviceDefinitionEmergencyLocation";

interface DeviceDefinitionEmergency {
  /** */
  address?: PostalAddress;

  /** */
  location?: DeviceDefinitionEmergencyLocation;
}

export default DeviceDefinitionEmergency;
