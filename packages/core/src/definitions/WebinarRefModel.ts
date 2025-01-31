import HostModel from "./HostModel.js";

interface WebinarRefModel {
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

  /**
   * Required
   */
  host?: HostModel;
}

export default WebinarRefModel;
