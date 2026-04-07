import type CallerIdData from "./CallerIdData.js";
import type CallerIdDeviceInfo from "./CallerIdDeviceInfo.js";

/**
 * Caller ID settings by device
 */
interface CallerIdByDevice {
  /**
   */
  device?: CallerIdDeviceInfo;

  /**
   */
  callerId?: CallerIdData;
}

export default CallerIdByDevice;
