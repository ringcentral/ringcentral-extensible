import type DeviceDefinitionEmergency from './DeviceDefinitionEmergency';
import type DeviceDefinitionPhoneInfo from './DeviceDefinitionPhoneInfo';

interface DeviceDefinition {
  /**
   * Device type. Only "OtherPhone" and "WebRTC" device types are supported at the moment
   * Required
   */
  type?: 'OtherPhone' | 'WebRTC';

  /**
   * Only "address" is supported at the moment
   * Required
   */
  emergency?: DeviceDefinitionEmergency;

  /**
   * To be used to assign a number by id
   * Required
   */
  phoneInfo?: DeviceDefinitionPhoneInfo;
}

export default DeviceDefinition;
