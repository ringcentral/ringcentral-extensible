import type DeviceDefinitionEmergencyLocation from "./DeviceDefinitionEmergencyLocation.js";
import type PostalAddress from "./PostalAddress.js";

interface DeviceDefinitionEmergency {
  /**
   */
  location?: DeviceDefinitionEmergencyLocation;

  /**
   */
  address?: PostalAddress;
}

export default DeviceDefinitionEmergency;
