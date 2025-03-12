/**
 * Query parameters for operation searchDirectoryEntries
 */
interface SearchDirectoryEntriesParameters {
  /**
   * Allows to make lookups across a whole directory skipping a filtering logic of Cross-Site access management feature.
   * Default: true
   */
  accessibleSitesOnly?: boolean;

  /**
   * A list of Account IDs. Deprecated, use the appropriate body field 'accountIds' instead.
   */
  accountId?: string[];

  /**
   * Department name. Deprecated, use the appropriate body field 'department' instead.
   * Example: North office
   */
  department?: string;

  /**
   * A list of Site IDs. Deprecated, use the appropriate body field 'siteIds' instead.
   */
  siteId?: string[];

  /**
   * List of extension current statuses. Deprecated, use the appropriate body field 'extensionStatuses' instead.
   */
  extensionStatus?: string[];

  /**
   * Types of extension to filter the contacts
   */
  extensionType?: (
    | "User"
    | "Department"
    | "Announcement"
    | "Voicemail"
    | "DigitalUser"
    | "VirtualUser"
    | "FaxUser"
    | "PagingOnly"
    | "SharedLinesGroup"
    | "IvrMenu"
    | "ApplicationExtension"
    | "ParkLocation"
    | "Limited"
    | "Bot"
    | "Site"
    | "Room"
    | "ProxyAdmin"
    | "DelegatedLinesGroup"
    | "FlexibleUser"
    | "GroupCallPickup"
    | "RoomConnector"
  )[];
}

export default SearchDirectoryEntriesParameters;
