interface ThreadUserModel {
  /**
   * Thread user's extension ID
   * Required
   * Example: 9876453210
   */
  extensionId?: string;

  /**
   * Thread user's name (first + last)
   * Example: John Doe
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
}

export default ThreadUserModel;
