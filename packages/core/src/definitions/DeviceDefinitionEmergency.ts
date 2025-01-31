import PostalAddress from "./PostalAddress.js";
import DeviceDefinitionEmergencyLocation from "./DeviceDefinitionEmergencyLocation.js";

interface DeviceDefinitionEmergency {
  /** */
  address?: PostalAddress;

  /** */
  location?: DeviceDefinitionEmergencyLocation;
}

export default DeviceDefinitionEmergency;
