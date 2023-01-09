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
   * Extension types
   * Example: User
   */
  extensionType?: string;
}

export default SearchDirectoryEntriesParameters;
