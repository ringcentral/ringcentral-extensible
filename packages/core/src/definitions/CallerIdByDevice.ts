import CallerIdDeviceInfo from './CallerIdDeviceInfo';
import CallerIdByDeviceInfo from './CallerIdByDeviceInfo';

/**
 * Caller ID settings by device
*/
class CallerIdByDevice {
  /**
   */
  device?: CallerIdDeviceInfo;

  /**
   */
  callerId?: CallerIdByDeviceInfo;
}

export default CallerIdByDevice;
