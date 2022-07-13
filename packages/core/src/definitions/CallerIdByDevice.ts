import CallerIdDeviceInfo from './CallerIdDeviceInfo';
import CallerIdByDeviceInfo from './CallerIdByDeviceInfo';

/**
 * Caller ID settings by device
*/
interface CallerIdByDevice {
  /**
   */
  device?: CallerIdDeviceInfo;

  /**
   */
  callerId?: CallerIdByDeviceInfo;
}

export default CallerIdByDevice;
