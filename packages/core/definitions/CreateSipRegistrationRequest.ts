import {DeviceInfoRequest, SIPInfoRequest} from './index';

class CreateSipRegistrationRequest {
  /**
   * Device information
   */
  device?: DeviceInfoRequest;

  /**
   * SIP settings for device
   */
  sipInfo?: SIPInfoRequest[];
}

export default CreateSipRegistrationRequest;
