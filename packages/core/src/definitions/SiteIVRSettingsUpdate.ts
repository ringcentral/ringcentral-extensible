import SiteIVRTopMenuUpdate from "./SiteIVRTopMenuUpdate";
import SiteIvrActionsUpdate from "./SiteIvrActionsUpdate";

interface SiteIVRSettingsUpdate {
  /** */
  topMenu?: SiteIVRTopMenuUpdate;

  /** */
  actions?: SiteIvrActionsUpdate[];
}

export default SiteIVRSettingsUpdate;
