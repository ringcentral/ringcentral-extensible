import SiteIVRTopMenuUpdate from "./SiteIVRTopMenuUpdate.js";
import SiteIvrActionsUpdate from "./SiteIvrActionsUpdate.js";

interface SiteIVRSettingsUpdate {
  /** */
  topMenu?: SiteIVRTopMenuUpdate;

  /** */
  actions?: SiteIvrActionsUpdate[];
}

export default SiteIVRSettingsUpdate;
