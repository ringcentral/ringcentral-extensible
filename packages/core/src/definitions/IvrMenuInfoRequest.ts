import type IvrMenuActionsInfo from "./IvrMenuActionsInfo.js";
import type IvrMenuPromptInfo from "./IvrMenuPromptInfo.js";
import type IvrMenuSiteInfo from "./IvrMenuSiteInfo.js";

interface IvrMenuInfoRequest {
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
}

export default IvrMenuInfoRequest;
