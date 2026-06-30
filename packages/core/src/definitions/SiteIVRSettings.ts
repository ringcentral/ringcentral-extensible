import type SiteIVRTopMenu from "./SiteIVRTopMenu.js";
import type SiteIvrActions from "./SiteIvrActions.js";

interface SiteIVRSettings {
  /**
   */
  topMenu?: SiteIVRTopMenu;

  /**
   * Number of attempts the IVR prompt will be played during a call before
   *  the "NoInput" rule will be executed. For request payloads, unsupported
   *  values return a `CMN-101` error.
   * Required
   * Format: int32
   */
  promptRepeatCount?: number;

  /**
   */
  actions?: SiteIvrActions[];
}

export default SiteIVRSettings;
