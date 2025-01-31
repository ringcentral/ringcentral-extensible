import WcsWebinarSettingsModel from "./WcsWebinarSettingsModel.js";
import WcsHostModel from "./WcsHostModel.js";

interface WcsWebinarResource {
  /**
   * Internal object ID
   * Example: 78654321
   */
  id?: string;

  /**
   * Object creation time
   * Required
   * Format: date-time
   */
  creationTime?: string;

  /**
   * Object last modification time
   * Required
   * Format: date-time
   */
  lastModifiedTime?: string;

  /**
   * Webinar title
   * Example: All-Hands Webinar
   */
  title?: string;

  /**
   * User-friendly description of the Webinar
   * Example: Quarterly All-hands event to present recent news about our company to employees
   */
  description?: string;

  /** */
  settings?: WcsWebinarSettingsModel;

  /**
   * Required
   */
  host?: WcsHostModel;
}

export default WcsWebinarResource;
