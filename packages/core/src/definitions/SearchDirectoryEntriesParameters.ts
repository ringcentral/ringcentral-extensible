/**
 * Query parameters for operation searchDirectoryEntries
 */
interface SearchDirectoryEntriesParameters {
  /**
   * A list of Account IDs
   * Example: 400131426008
   */
  accountId?: string;

  /**
   * A list of department names
   * Example: North office
   */
  department?: string;

  /**
   * A list of Site IDs
   * Example: 872781797006
   */
  siteId?: string;

  /**
   * Extension current state
   * Example: Enabled
   */
  extensionStatus?: string;

  /**
   * Type of extension to filter the contacts
   * Example: User
   */
  extensionType?:
    | 'User'
    | 'Department'
    | 'Announcement'
    | 'Voicemail'
    | 'DigitalUser'
    | 'VirtualUser'
    | 'FaxUser'
    | 'PagingOnly'
    | 'SharedLinesGroup'
    | 'IvrMenu'
    | 'ApplicationExtension'
    | 'ParkLocation'
    | 'Limited'
    | 'Bot'
    | 'Site'
    | 'Room'
    | 'ProxyAdmin'
    | 'DelegatedLinesGroup'
    | 'FlexibleUser'
    | 'GroupCallPickup'
    | 'RoomConnector';
}

export default SearchDirectoryEntriesParameters;
