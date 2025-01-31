import BatchProvisionUsersRequestItem from "./BatchProvisionUsersRequestItem.js";

/**
 * Describes request for user extension provisioning
 */
interface BatchProvisionUsersRequest {
  /**
   * Required
   */
  records?: BatchProvisionUsersRequestItem[];
}

export default BatchProvisionUsersRequest;
