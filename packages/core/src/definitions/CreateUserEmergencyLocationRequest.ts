import CreateUserEmergencyLocationRequestAddress from './CreateUserEmergencyLocationRequestAddress';

interface CreateUserEmergencyLocationRequest {
  /**
   * Name of a new personal emergency response location
   */
  name?: string;

  /**
   * Address format id
   */
  addressFormatId?: string;

  /**
   */
  address?: CreateUserEmergencyLocationRequestAddress;
}

export default CreateUserEmergencyLocationRequest;
