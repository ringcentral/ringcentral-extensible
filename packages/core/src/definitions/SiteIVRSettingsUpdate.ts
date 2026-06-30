import type SiteIVRTopMenuUpdate from "./SiteIVRTopMenuUpdate.js";
import type SiteIvrActions from "./SiteIvrActions.js";

interface SiteIVRSettingsUpdate {
  /**
   */
  topMenu?: SiteIVRTopMenuUpdate;

  /**
   */
  actions?: SiteIvrActions[];

  /**
   * Number of attempts the IVR prompt will be played during a call before
   *  the "NoInput" rule will be executed. For request payloads, unsupported
   *  values return a `CMN-101` error.
   * Format: int32
   */
  promptRepeatCount?: number;
}

export default SiteIVRSettingsUpdate;
