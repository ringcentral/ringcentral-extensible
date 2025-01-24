import type CallerIdDeviceInfo from "./CallerIdDeviceInfo";
import type CallerIdByDeviceInfo from "./CallerIdByDeviceInfo";

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
