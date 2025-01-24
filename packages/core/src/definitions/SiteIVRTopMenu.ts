/**
 * Top IVR Menu extension. Mandatory for MultiLevel mode
 */
interface SiteIVRTopMenu {
  /**
   * Internal identifier of an IVR menu extension
   */
  id?: string;

  /**
   * Link to an IVR menu extension resource
   * Format: uri
   */
  uri?: string;

  /**
   * Full name of an IVR menu extension user
   */
  name?: string;
}

export default SiteIVRTopMenu;
