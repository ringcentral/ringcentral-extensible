import {DeviceInfoRequest, SIPInfoRequest} from './index';

class CreateSipRegistrationRequest {
  /**
   */
  device?: DeviceInfoRequest;

  /**
   * SIP settings for device
   */
  sipInfo?: SIPInfoRequest[];
}
export default CreateSipRegistrationRequest;
