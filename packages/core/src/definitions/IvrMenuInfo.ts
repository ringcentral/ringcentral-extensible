import type IvrMenuActionsInfo from "./IvrMenuActionsInfo.js";
import type IvrMenuPromptInfo from "./IvrMenuPromptInfo.js";
import type IvrMenuSiteInfo from "./IvrMenuSiteInfo.js";

interface IvrMenuInfo {
  /**
   * Internal identifier of an IVR Menu extension
   */
  id?: string;

  /**
   * Link to an IVR Menu extension resource
   * Format: uri
   */
  uri?: string;

  /**
   * First name of an IVR Menu user
   */
  name?: string;

  /**
   * Number of an IVR Menu extension
   */
  extensionNumber?: string;

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
  site?: IvrMenuSiteInfo;

  /**
   */
  prompt?: IvrMenuPromptInfo;

  /**
   * Keys handling settings
   */
  actions?: IvrMenuActionsInfo[];
}

export default IvrMenuInfo;
