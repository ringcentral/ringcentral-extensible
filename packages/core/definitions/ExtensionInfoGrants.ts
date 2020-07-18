class ExtensionInfoGrants {
  /**
   * Internal identifier of an extension
   */
  id?: string;

  /**
   * Canonical URI of an extension
   */
  uri?: string;

  /**
   * Extension short number (usually 3 or 4 digits)
   */
  extensionNumber?: string;

  /**
   * Name of extension
   */
  name?: string;

  /**
   * Extension type
   */
  type?:
    | 'User'
    | 'Fax User'
    | 'VirtualUser'
    | 'DigitalUser'
    | 'Department'
    | 'Announcement'
    | 'Voicemail'
    | 'SharedLinesGroup'
    | 'PagingOnly'
    | 'IvrMenu'
    | 'ApplicationExtension'
    | 'ParkLocation';
}

export default ExtensionInfoGrants;
