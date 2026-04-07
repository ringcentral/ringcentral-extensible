import type SiteIVRTopMenu from "./SiteIVRTopMenu.js";
import type SiteIvrActions from "./SiteIvrActions.js";

interface SiteIVRSettings {
  /**
   */
  topMenu?: SiteIVRTopMenu;

  /**
   */
  actions?: SiteIvrActions[];
}

export default SiteIVRSettings;
