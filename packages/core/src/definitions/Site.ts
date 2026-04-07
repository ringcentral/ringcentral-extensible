/**
 * Specifies a site that message template is associated with. Supported only if the Sites feature is enabled.
 * The default is `main-site` value.
 *
 */
interface Site {
  /**
   * Internal identifier of a site
   */
  id?: string;

  /**
   * Custom name of a site
   */
  name?: string;
}

export default Site;
