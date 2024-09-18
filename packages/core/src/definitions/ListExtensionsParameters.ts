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
   * Example: alice.smith@example.com&email=bob.johnson@example.com
   */
  email?: string;

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
  status?: ('Enabled' | 'Disabled' | 'Frozen' | 'NotActivated' | 'Unassigned')[];

  /**
   * Extension type. Multiple values are supported. Please note
   *  that legacy 'Department' extension type corresponds to 'Call Queue'
   *  extensions in modern RingCentral product terminology
   */
  type?: (
    | 'User'
    | 'FaxUser'
    | 'FlexibleUser'
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
    | 'ProxyAdmin'
    | 'DelegatedLinesGroup'
    | 'Site'
  )[];
}

export default ListExtensionsParameters;
