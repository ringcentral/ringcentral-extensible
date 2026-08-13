import type WebAppDeviceRecord from "./WebAppDeviceRecord.js";

interface WebAppDevicesResponse {
  /**
   * List of Web Phone devices
   */
  records?: WebAppDeviceRecord[];
}

export default WebAppDevicesResponse;
