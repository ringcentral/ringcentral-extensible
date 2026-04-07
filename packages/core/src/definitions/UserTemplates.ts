import type EnumeratedPagingModel from "./EnumeratedPagingModel.js";
import type PageNavigationModel from "./PageNavigationModel.js";
import type TemplateInfo from "./TemplateInfo.js";

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
