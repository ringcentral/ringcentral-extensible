import type SiteIVRTopMenuUpdate from "./SiteIVRTopMenuUpdate";
import type SiteIvrActionsUpdate from "./SiteIvrActionsUpdate";

interface SiteIVRSettingsUpdate {
  /** */
  topMenu?: SiteIVRTopMenuUpdate;

  /** */
  actions?: SiteIvrActionsUpdate[];
}

export default SiteIVRSettingsUpdate;
