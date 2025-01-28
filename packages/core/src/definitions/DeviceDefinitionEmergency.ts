import PostalAddress from "./PostalAddress";
import DeviceDefinitionEmergencyLocation from "./DeviceDefinitionEmergencyLocation";

interface DeviceDefinitionEmergency {
  /** */
  address?: PostalAddress;

  /** */
  location?: DeviceDefinitionEmergencyLocation;
}

export default DeviceDefinitionEmergency;
