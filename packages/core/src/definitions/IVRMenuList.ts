import IvrMenuListInfo from "./IvrMenuListInfo.js";

interface IvrMenuList {
  /**
   * Link to an IVR Menu list
   * Format: uri
   */
  uri?: string;

  /**
   * List of ivr menus
   */
  records?: IvrMenuListInfo[];
}

export default IvrMenuList;
