class ListExtensionsParameters {
  /**
   * Extension number to retrieve
   */
  extensionId?: string;

  /**
   * Extension email address
   */
  email?: string;

  /**
   * Indicates the page number to retrieve. Only positive number values are allowed
   * Default: 1
   */
  page?: number;

  /**
   * Indicates the page size (number of items)
   * Default: 100
   */
  perPage?: number;

  /**
   * Extension current state. Multiple values are supported. If 'Unassigned' is specified, then extensions without `extensionNumber` attribute are returned. If not specified, then all extensions are returned.
   */
  status?: ('Enabled' | 'Disabled' | 'NotActivated' | 'Unassigned')[];

  /**
   * Extension type. Multiple values are supported
   */
  type?: (
    | 'User'
    | 'FaxUser'
    | 'VirtualUser'
    | 'DigitalUser'
    | 'Department'
    | 'Announcement'
    | 'Voicemail'
    | 'SharedLinesGroup'
    | 'PagingOnly'
    | 'IvrMenu'
    | 'ApplicationExtension'
    | 'ParkLocation'
    | 'Limited'
    | 'Bot'
  )[];
}

export default ListExtensionsParameters;
