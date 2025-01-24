/**
 * Site data. If multi-site feature is turned on for an account,
 * then ID of a site must be specified. In order to assign a wireless
 * point to the main site (company) the site ID should be set to `main-site`
 */
interface ProvisioningSiteInfo {
  /**
   * Internal identifier of a site
   * Format: uri
   */
  id?: string;

  /**
   * Link to a site resource
   * Format: uri
   */
  uri?: string;

  /**
   * Name of a site
   */
  name?: string;

  /**
   * Site code value. Returned only if specified
   */
  code?: string;
}

export default ProvisioningSiteInfo;
