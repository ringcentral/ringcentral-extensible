/**
 * Message owner information. Supported for shared voicemail and sms messages only
 */
interface OwnerResource {
  /**
   * Name of a voicemail owner
   */
  name?: string;

  /**
   * Type of the extension. For unrecognized types the `Unknown` value is returned.
   *  Please note that legacy 'Department' extension type corresponds to 'Call Queue'
   *  extensions in modern RingCentral product terminology
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
    | "TieLine"
    | "Unknown";

  /**
   * Internal identifier of an extension
   */
  extensionId?: string;
}

export default OwnerResource;
