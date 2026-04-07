import type SiteIVRTopMenuUpdate from "./SiteIVRTopMenuUpdate.js";
import type SiteIvrActions from "./SiteIvrActions.js";

interface SiteIVRSettingsUpdate {
  /**
   */
  topMenu?: SiteIVRTopMenuUpdate;

  /**
   */
  actions?: SiteIvrActions[];
}

export default SiteIVRSettingsUpdate;
