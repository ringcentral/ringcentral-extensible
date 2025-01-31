import CallerIdDeviceInfo from "./CallerIdDeviceInfo.js";
import CallerIdByDeviceInfo from "./CallerIdByDeviceInfo.js";

/**
 * Caller ID settings by device
 */
interface CallerIdByDevice {
  /** */
  device?: CallerIdDeviceInfo;

  /** */
  callerId?: CallerIdByDeviceInfo;
}

export default CallerIdByDevice;
