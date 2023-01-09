import EmergencyLocationAddressInfo from './EmergencyLocationAddressInfo';

interface CreateUserEmergencyLocationRequest {
  /**
   * Name of a new personal emergency response location
   */
  name?: string;

  /**
   */
  address?: EmergencyLocationAddressInfo;
}

export default CreateUserEmergencyLocationRequest;
