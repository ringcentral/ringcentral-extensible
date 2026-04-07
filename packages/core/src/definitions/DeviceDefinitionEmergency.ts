import DeviceDefinitionEmergencyLocation from "./DeviceDefinitionEmergencyLocation.js";
import PostalAddress from "./PostalAddress.js";

interface DeviceDefinitionEmergency {
  /**
   */
  location?: DeviceDefinitionEmergencyLocation;

  /**
   */
  address?: PostalAddress;
}

export default DeviceDefinitionEmergency;
