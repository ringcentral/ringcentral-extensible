import {DeviceInfoRequest, SIPInfoRequest} from '.';

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
