/**
 * Message owner information. Supported for shared voicemail and sms messages only
 */
interface OwnerResource {
  /**
   * Name of a voicemail owner
   */
  name?: string;

  /**
   * ExtensionType
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
    | "FlexibleUser";

  /**
   * Internal identifier of an extension
   */
  extensionId?: string;
}

export default OwnerResource;
