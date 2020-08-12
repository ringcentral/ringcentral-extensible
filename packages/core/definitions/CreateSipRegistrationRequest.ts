import {DeviceInfoRequest, SIPInfoRequest} from './index';

class CreateSipRegistrationRequest {
  /**
   * Device unique description
   */
  device?: DeviceInfoRequest;

  /**
   * SIP settings for device
   */
  sipInfo?: SIPInfoRequest[];
}

export default CreateSipRegistrationRequest;
