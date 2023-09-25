import type OrderBy from './OrderBy';

interface SearchDirectoryEntriesRequest {
  /**
   * String value to filter the contacts. The value specified is searched through the following fields: `firstName`, `lastName`, `extensionNumber`, `phoneNumber`, `email`, `jobTitle`, `department`, `customFieldValue`
   */
  searchString?: string;

  /**
   * The list of field to be searched for
   */
  searchFields?: (
    | 'firstName'
    | 'lastName'
    | 'extensionNumber'
    | 'phoneNumber'
    | 'email'
    | 'jobTitle'
    | 'department'
    | 'customFieldValue'
  )[];

  /**
   * If 'True' then contacts of all accounts in federation are returned, if it is in federation, account section will be returned. If 'False' then only contacts of the current account are returned, and account section is eliminated in this case
   */
  showFederated?: boolean;

  /**
   * Should show AdminOnly Contacts
   */
  showAdminOnlyContacts?: boolean;

  /**
   * Type of directory contact to filter
   * Example: User
   */
  extensionType?:
    | 'User'
    | 'Department'
    | 'Announcement'
    | 'Voicemail'
    | 'SharedLinesGroup'
    | 'PagingOnly'
    | 'ParkLocation'
    | 'IvrMenu'
    | 'Limited'
    | 'ApplicationExtension'
    | 'Site'
    | 'Bot'
    | 'Room'
    | 'DelegatedLinesGroup'
    | 'GroupCallPickup'
    | 'External';

  /**
   * Internal identifier of the business site to which extensions belong
   * Example: 872781797006
   */
  siteId?: string;

  /**
   * Allows to control whether External (Hybrid) contacts should be returned in the response or not
   * Example: true
   */
  showExternalContacts?: boolean;

  /**
   * The list of Internal identifiers of an accounts
   * Example: 854874047006,422456828004,854874151006
   */
  accountIds?: string[];

  /**
   * Department
   */
  department?: string;

  /**
   * The list of Internal identifiers of the business sites to which extensions belong
   */
  siteIds?: string[];

  /**
   * Extension current state.
   */
  extensionStatuses?: ('Enabled' | 'Disabled' | 'NotActivated')[];

  /**
   * Types of extension to filter the contacts
   */
  extensionTypes?: (
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
    | 'RoomConnector'
  )[];

  /**
   * Sorting settings
   */
  orderBy?: OrderBy[];

  /**
   * Format: int32
   */
  page?: number;

  /**
   * Format: int32
   */
  perPage?: number;
}

export default SearchDirectoryEntriesRequest;
