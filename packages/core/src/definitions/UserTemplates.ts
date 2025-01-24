import type TemplateInfo from "./TemplateInfo";
import type PageNavigationModel from "./PageNavigationModel";
import type EnumeratedPagingModel from "./EnumeratedPagingModel";

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
