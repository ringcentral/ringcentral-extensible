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
