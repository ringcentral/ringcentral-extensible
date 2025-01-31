import BatchProvisionUsersRequestItemContact from "./BatchProvisionUsersRequestItemContact.js";
import BatchProvisionUsersRequestItemCostCenter from "./BatchProvisionUsersRequestItemCostCenter.js";
import BatchProvisionUsersRequestItemRoles from "./BatchProvisionUsersRequestItemRoles.js";
import BatchProvisionUsersRequestItemDevices from "./BatchProvisionUsersRequestItemDevices.js";

/**
 * Describes request for user extension provisioning
 */
interface BatchProvisionUsersRequestItem {
  /**
   * Short number of an extension.
   *  Actual max length depends on system length limit for extension.
   * Example: 205
   */
  extensionNumber?: string;

  /**
   * Extension status. Only "Enabled" can be specified
   * Required
   * Default: Enabled
   */
  status?: "Enabled";

  /**
   * Personal contact information
   * Required
   */
  contact?: BatchProvisionUsersRequestItemContact;

  /** */
  costCenter?: BatchProvisionUsersRequestItemCostCenter;

  /** */
  roles?: BatchProvisionUsersRequestItemRoles[];

  /** */
  devices?: BatchProvisionUsersRequestItemDevices[];
}

export default BatchProvisionUsersRequestItem;
