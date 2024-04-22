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
   * If 'true' address validation for non-us addresses is skipped
   */
  trusted?: boolean;

  /**
   */
  address?: CommonEmergencyLocationAddressInfo;
}

export default CreateUserEmergencyLocationRequest;
