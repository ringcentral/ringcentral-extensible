import type IvrMenuActionsInfo from "./IvrMenuActionsInfo.js";
import type IvrMenuPromptInfo from "./IvrMenuPromptInfo.js";
import type IvrMenuSiteInfo from "./IvrMenuSiteInfo.js";

interface IvrMenuInfoCreate {
  /**
   * First name of an IVR Menu user
   */
  name?: string;

  /**
   * Number of an IVR Menu extension
   */
  extensionNumber?: string;

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

  /**
   * Number of attempts the IVR prompt will be played during a call before
   *  the "NoInput" rule will be executed. For request payloads, unsupported
   *  values return a `CMN-101` error.
   * Format: int32
   * Default: 3
   */
  promptRepeatCount?: number;
}

export default IvrMenuInfoCreate;
