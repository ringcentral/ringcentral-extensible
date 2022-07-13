import LocationUpdatesEmergencyAddressInfoRequest from './LocationUpdatesEmergencyAddressInfoRequest';

interface CreateUserEmergencyLocationRequest {
  /**
   * Name of a new personal emergency response location
   */
  name?: string;

  /**
   */
  address?: LocationUpdatesEmergencyAddressInfoRequest;
}

export default CreateUserEmergencyLocationRequest;
