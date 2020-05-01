import {
  TemplateInfo,
  ProvisioningNavigationInfo,
  ProvisioningPagingInfo,
} from '.';

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
   * Information on navigation
   * Required
   */
  navigation?: ProvisioningNavigationInfo;

  /**
   * Information on paging
   * Required
   */
  paging?: ProvisioningPagingInfo;
}

export default UserTemplates;
