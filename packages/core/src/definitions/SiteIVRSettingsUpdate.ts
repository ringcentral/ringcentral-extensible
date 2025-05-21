import SiteIVRTopMenuUpdate from "./SiteIVRTopMenuUpdate.js";
import SiteIvrActions from "./SiteIvrActions.js";

interface SiteIVRSettingsUpdate {
  /** */
  topMenu?: SiteIVRTopMenuUpdate;

  /** */
  actions?: SiteIvrActions[];
}

export default SiteIVRSettingsUpdate;
