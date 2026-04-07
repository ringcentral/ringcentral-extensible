interface RemoveLineResponse {
  /**
   * Internal identifier of a source device
   * Required
   */
  id?: string;

  /**
   * Device type
   * Required
   * Default: HardPhone
   */
  type?:
    | "HardPhone"
    | "SoftPhone"
    | "OtherPhone"
    | "MobileDevice"
    | "BLA"
    | "Paging"
    | "WebPhone"
    | "WebRTC"
    | "ZoomMobile"
    | "ZoomPhone"
    | "Room"
    | "Unknown";

  /**
   * The display name of a source device
   * Required
   * Example: My Device N1
   */
  name?: string;

  /**
   * Serial number of a device (HardPhone)
   * Example: ff:ff:ff:ff:ff:ff
   */
  serial?: string;
}

export default RemoveLineResponse;
