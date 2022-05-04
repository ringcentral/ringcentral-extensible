import { TemplateInfo, ProvisioningNavigationInfo, ProvisioningPagingInfo } from './index';

class UserTemplates {
  /**
   * Link to user templates resource
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
  navigation?: ProvisioningNavigationInfo;

  /**
   * Required
   */
  paging?: ProvisioningPagingInfo;
}
export default UserTemplates;
