/**
 * Query parameters for operation listExtensionGrants
*/
interface ListExtensionGrantsParameters {
  /**
   * Type of extension to be returned. Multiple values are supported.
 *  Please note that legacy 'Department' extension type corresponds
 *  to 'Call Queue' extensions in modern RingCentral product terminology
   */
  extensionType?: ('User' | 'FaxUser' | 'VirtualUser' | 'DigitalUser' | 'Department' | 'Announcement' | 'Voicemail' | 'SharedLinesGroup' | 'PagingOnly' | 'IvrMenu' | 'ApplicationExtension' | 'ParkLocation' | 'Limited' | 'Bot' | 'Room');

  /**
   * Indicates a page number to retrieve. Only positive number values
 *  are allowed. Default value is '1'
   * Format: int32
   * Default: 1
   */
  page?: number;

  /**
   * Indicates a page size (number of items). If not specified, the value is '100' by default
   * Format: int32
   * Default: 100
   */
  perPage?: number;
}

export default ListExtensionGrantsParameters;
