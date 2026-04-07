interface SiteBasicInfo {
  /**
   * Site extension identifier or "main-site" for the main site
   * Required
   */
  id?: string;

  /**
   * Site name
   * Required
   */
  name?: string;
}

export default SiteBasicInfo;
