import type CallerIdDeviceInfoRequest from "./CallerIdDeviceInfoRequest";
import type CallerIdByDeviceInfoRequest from "./CallerIdByDeviceInfoRequest";

/**
 * Caller ID settings by device
 */
interface CallerIdByDeviceRequest {
  /** */
  device?: CallerIdDeviceInfoRequest;

  /** */
  callerId?: CallerIdByDeviceInfoRequest;
}

export default CallerIdByDeviceRequest;
