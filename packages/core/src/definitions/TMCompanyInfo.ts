interface TMCompanyInfo {
  /**
   * Internal identifier of a company (RingCentral account ID)
   * Required
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
   * Datetime of creation in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   * Required
   * Format: date-time
   */
  creationTime?: string;

  /**
   * Datetime of last modification in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   * Required
   * Format: date-time
   */
  lastModifiedTime?: string;
}

export default TMCompanyInfo;
