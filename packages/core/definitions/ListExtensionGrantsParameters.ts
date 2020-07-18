class ListExtensionGrantsParameters {
  /**
   * Type of extension to be returned. Multiple values are supported
   */
  extensionType?:
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
    | 'Bot';

  /**
   * Default: 1
   */
  page?: string;

  /**
   * Default: 100
   */
  perPage?: string;
}

export default ListExtensionGrantsParameters;
