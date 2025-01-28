import TemplateInfo from "./TemplateInfo";
import PageNavigationModel from "./PageNavigationModel";
import EnumeratedPagingModel from "./EnumeratedPagingModel";

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
