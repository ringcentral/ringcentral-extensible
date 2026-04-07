import DeviceDefinitionEmergency from "./DeviceDefinitionEmergency.js";
import DeviceDefinitionPhoneInfo from "./DeviceDefinitionPhoneInfo.js";

interface DeviceDefinition {
    /**
   * Device type. Only "OtherPhone" and "WebRTC" device types are supported at the moment
   * Required
   */
  type?: ('OtherPhone' | 'WebRTC');

  /**
   * Required
   */
  emergency?: DeviceDefinitionEmergency;

  /**
   * Assign a specific phone number
   * Required
   */
  phoneInfo?: DeviceDefinitionPhoneInfo;

  /**
   * The option that indicates whether Contact Center Phone Line should be created or not
   */
  contactCenterPhoneLine?: boolean;
}

export default DeviceDefinition;
