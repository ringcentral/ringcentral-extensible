import WcsWebinarSettingsModel from './WcsWebinarSettingsModel';
import RcwLinkedUserModel from './RcwLinkedUserModel';

interface WebinarCreationRequest {
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
   */
  settings?: WcsWebinarSettingsModel;

  /**
   */
  host?: RcwLinkedUserModel;
}

export default WebinarCreationRequest;
