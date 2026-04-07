import CallerIdDeviceInfo from "./CallerIdDeviceInfo.js";
import CallerIdData from "./CallerIdData.js";

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
