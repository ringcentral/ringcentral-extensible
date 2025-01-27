import IVRMenuListInfo from "./IVRMenuListInfo.js";

interface IVRMenuList {
  /**
   * Link to an IVR Menu list
   * Format: uri
   */
  uri?: string;

  /**
   * List of ivr menus
   */
  records?: IVRMenuListInfo[];
}

export default IVRMenuList;
