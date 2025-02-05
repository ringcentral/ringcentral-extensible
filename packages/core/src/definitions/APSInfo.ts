/**
 * APS (Apple Push Service) information/ priority data
 */
interface APSInfo {
  /**
   * If the value is '1' then notification is turned on even if the application is in background
   * Format: int32
   */
  "content-available"?: number;
}

export default APSInfo;
