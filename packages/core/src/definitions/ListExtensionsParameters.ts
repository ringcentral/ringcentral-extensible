/**
 * Query parameters for operation listExtensions
 */
interface ListExtensionsParameters {
  /**
   * Extension short number to filter records
   */
  extensionNumber?: string;

  /**
   * Extension email address. Multiple values are accepted
   * Example: alice.smith@example.com,bob.johnson@example.com
   */
  email?: string[];

  /**
   * Indicates a page number to retrieve. Only positive number values
   *  are allowed
   * Format: int32
   * Default: 1
   */
  page?: number;

  /**
   * Indicates a page size (number of items)
   * Format: int32
   * Default: 100
   */
  perPage?: number;

  /**
   * Extension status. Multiple values are supported. If `Unassigned`
   *  is specified, then extensions without `extensionNumber` attribute are returned.
   *  If not specified, then all extensions are returned
   */
  status?:
    ("Enabled" | "Disabled" | "Frozen" | "NotActivated" | "Unassigned")[];

  /**
   * Extension type. Please note
   *  that legacy 'Department' extension type corresponds to 'Call Queue'
   *  extensions in modern RingCentral product terminology
   */
  type?: (
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
    | "Unknown"
  )[];
}

export default ListExtensionsParameters;
