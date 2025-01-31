import TemplateInfo from "./TemplateInfo.js";
import PageNavigationModel from "./PageNavigationModel.js";
import EnumeratedPagingModel from "./EnumeratedPagingModel.js";

interface UserTemplates {
  /**
   * Link to user templates resource
   * Format: uri
   */
  uri?: string;

  /**
   * List of user templates
   * Required
   */
  records?: TemplateInfo[];

  /**
   * Required
   */
  navigation?: PageNavigationModel;

  /**
   * Required
   */
  paging?: EnumeratedPagingModel;
}

export default UserTemplates;
