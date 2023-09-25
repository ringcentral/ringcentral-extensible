import type WcsWebinarSettingsModel from './WcsWebinarSettingsModel';

interface WebinarBaseModel {
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

  /**
   */
  settings?: WcsWebinarSettingsModel;
}

export default WebinarBaseModel;
