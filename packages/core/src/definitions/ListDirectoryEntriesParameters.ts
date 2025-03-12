/**
 * Query parameters for operation listDirectoryEntries
 */
interface ListDirectoryEntriesParameters {
  /**
   * Allows to make lookups across a whole directory skipping a filtering logic of Cross-Site access management feature.
   * Default: true
   */
  accessibleSitesOnly?: boolean;

  /**
   * If `true` then contacts of all accounts in federation are returned. If `false` then only contacts of the current account are returned, and account section is eliminated in this case
   * Default: true
   */
  showFederated?: boolean;

  /**
   * Type of an extension. Please note that legacy 'Department' extension type corresponds to 'Call Queue' extensions in modern RingCentral product terminology
   */
  type?:
    | "User"
    | "Department"
    | "Announcement"
    | "Voicemail"
    | "SharedLinesGroup"
    | "PagingOnly"
    | "IvrMenu"
    | "ParkLocation"
    | "Limited"
    | "External"
    | "DelegatedLinesGroup";

  /**
   * Type of extension group
   */
  typeGroup?: "User" | "NonUser";

  /**
   * Page number
   * Format: int32
   * Default: 1
   */
  page?: number;

  /**
   * Records count to be returned per one page. It can be either integer or string with the specific keyword values:
   *  - `all` - all records are returned in one page
   *  - `max` - maximum count of records that can be returned in one page
   * Maximum: 2000
   * Format: int32
   * Default: 1000
   */
  perPage?: "max" | "all";

  /**
   * Internal identifier of the business site to which extensions belong
   */
  siteId?: string;
}

export default ListDirectoryEntriesParameters;
