/**
 * Query parameters for operation searchDirectoryEntries
 */
interface SearchDirectoryEntriesParameters {
  /**
   * Allows to make lookups across a whole directory skipping a filtering logic of Cross-Site access management feature.
   * Default: true
   */
  accessibleSitesOnly?: boolean;
}

export default SearchDirectoryEntriesParameters;
