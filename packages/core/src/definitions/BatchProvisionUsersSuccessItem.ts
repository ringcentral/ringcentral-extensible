import BatchProvisionUsersSuccessItemExtension from "./BatchProvisionUsersSuccessItemExtension.js";

interface BatchProvisionUsersSuccessItem {
  /**
   * Indicates if the provisioning operation was successful for this item, always `true` in this model
   * Required
   * Example: true
   */
  successful?: boolean;

  /**
   * Required
   */
  extension?: BatchProvisionUsersSuccessItemExtension;
}

export default BatchProvisionUsersSuccessItem;
