import RcwLinkedUserModel from "./RcwLinkedUserModel.js";

interface WcsWebinarRefModel {
  /**
   * Internal object ID
   * Example: 78654321
   */
  id?: string;

  /**
   * Webinar title
   * Required
   * Example: All-Hands Webinar
   */
  title?: string;

  /**
   * User-friendly description of the Webinar
   * Example: Quarterly All-hands event to present recent news about our company to employees
   */
  description?: string;

  /** */
  host?: RcwLinkedUserModel;
}

export default WcsWebinarRefModel;
