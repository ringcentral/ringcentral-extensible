import CallerIdDeviceInfoRequest from "./CallerIdDeviceInfoRequest.js";
import CallerIdByDeviceInfoRequest from "./CallerIdByDeviceInfoRequest.js";

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
