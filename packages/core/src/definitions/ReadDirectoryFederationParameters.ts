/**
 * Query parameters for operation readDirectoryFederation
 */
interface ReadDirectoryFederationParameters {
  /**
   * Federation types for search
   */
  types?: "All" | "Regular" | "AdminOnly";
}

export default ReadDirectoryFederationParameters;
