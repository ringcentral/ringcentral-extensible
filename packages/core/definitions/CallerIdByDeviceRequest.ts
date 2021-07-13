import {CallerIdDeviceInfoRequest, CallerIdByDeviceInfoRequest} from './index';

// Caller ID settings by device
class CallerIdByDeviceRequest {
  /**
   */
  device?: CallerIdDeviceInfoRequest;

  /**
   */
  callerId?: CallerIdByDeviceInfoRequest;
}
export default CallerIdByDeviceRequest;
