/**
 * Site data
 */
interface IvrMenuSiteInfo {
  /**
   * Internal identifier of a site. If the value is not specified in request, then the `main-site` default value is used
   */
  id?: string;

  /**
   * Site name
   */
  name?: string;
}

export default IvrMenuSiteInfo;
