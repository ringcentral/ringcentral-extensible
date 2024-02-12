import type CommonEmergencyLocationAddressInfo from './CommonEmergencyLocationAddressInfo';

interface CreateUserEmergencyLocationRequest {
  /**
   * Name of a new personal emergency response location
   */
  name?: string;

  /**
   * Address format ID
   */
  addressFormatId?: string;

  /**
   */
  address?: CommonEmergencyLocationAddressInfo;
}

export default CreateUserEmergencyLocationRequest;
