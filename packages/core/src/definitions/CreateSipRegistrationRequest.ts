import DeviceInfoRequest from './DeviceInfoRequest';
import SIPInfoRequest from './SIPInfoRequest';

interface CreateSipRegistrationRequest {
  /**
   */
  device?: DeviceInfoRequest;

  /**
   * SIP settings for device
   */
  sipInfo?: SIPInfoRequest[];
}

export default CreateSipRegistrationRequest;
