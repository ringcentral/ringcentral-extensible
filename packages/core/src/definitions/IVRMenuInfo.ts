import IvrMenuSiteInfo from "./IvrMenuSiteInfo.js";
import IvrMenuPromptInfo from "./IvrMenuPromptInfo.js";
import IVRMenuActionsInfo from "./IVRMenuActionsInfo.js";

interface IVRMenuInfo {
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

  /** */
  site?: IvrMenuSiteInfo;

  /** */
  prompt?: IvrMenuPromptInfo;

  /**
   * Keys handling settings
   */
  actions?: IVRMenuActionsInfo[];
}

export default IVRMenuInfo;
