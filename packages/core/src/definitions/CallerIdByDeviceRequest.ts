import CallerIdDeviceInfoRequest from './CallerIdDeviceInfoRequest';
import CallerIdByDeviceInfoRequest from './CallerIdByDeviceInfoRequest';

/**
 * Caller ID settings by device
*/
class CallerIdByDeviceRequest {
  /**
   */
  device?: CallerIdDeviceInfoRequest;

  /**
   */
  callerId?: CallerIdByDeviceInfoRequest;
}

export default CallerIdByDeviceRequest;
