/**
 * Message owner information. Supported for shared voicemail and sms messages only
 */
interface OwnerResource {
  /**
   * Name of a voicemail owner
   */
  name?: string;

  /**
   * Type of the extension.
   *  For unrecognized types the `Unknown` value is returned
   * Example: User
   */
  extensionType?:
    | "User"
    | "Department"
    | "Announcement"
    | "Voicemail"
    | "DigitalUser"
    | "VirtualUser"
    | "FaxUser"
    | "PagingOnly"
    | "SharedLinesGroup"
    | "DelegatedLinesGroup"
    | "GroupCallPickup"
    | "IvrMenu"
    | "ApplicationExtension"
    | "ProxyAdmin"
    | "RoomConnector"
    | "ParkLocation"
    | "Limited"
    | "Bot"
    | "Site"
    | "Room"
    | "FlexibleUser"
    | "Unknown";

  /**
   * Internal identifier of an extension
   */
  extensionId?: string;
}

export default OwnerResource;
