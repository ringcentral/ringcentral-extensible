class GlipCompany {
  /**
   * Internal identifier of an RC account/Glip company, or tilde (~) to indicate a company the current user belongs to
   * Required
   * Default: ~
   */
  id?: string;

  /**
   * Name of a company
   */
  name?: string;

  /**
   * Domain name of a company
   */
  domain?: string;

  /**
   * Datetime of creation in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format
   * Required
   */
  creationTime?: string;

  /**
   * Datetime of last modification in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format
   * Required
   */
  lastModifiedTime?: string;
}

export default GlipCompany;
