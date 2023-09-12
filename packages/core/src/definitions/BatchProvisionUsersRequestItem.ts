import BatchProvisionUsersRequestItemContact from './BatchProvisionUsersRequestItemContact';
import BatchProvisionUsersRequestItemCostCenter from './BatchProvisionUsersRequestItemCostCenter';
import BatchProvisionUsersRequestItemRoles from './BatchProvisionUsersRequestItemRoles';
import BatchProvisionUsersRequestItemDevices from './BatchProvisionUsersRequestItemDevices';

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
  status?: ('Enabled');

  /**
   * Personal contact information
   * Required
   */
  contact?: BatchProvisionUsersRequestItemContact;

  /**
   */
  costCenter?: BatchProvisionUsersRequestItemCostCenter;

  /**
   */
  roles?: BatchProvisionUsersRequestItemRoles[];

  /**
   */
  devices?: BatchProvisionUsersRequestItemDevices[];

  /**
   * Specifies if a welcome/activation email is sent to the new users (within extension status changing from
 *  'Unassigned' to 'NotActivated/Disabled')
   * Default: true
   */
  sendWelcomeEmail?: boolean;
}

export default BatchProvisionUsersRequestItem;
