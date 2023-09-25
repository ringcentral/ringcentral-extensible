import type BatchProvisionUsersRequestItem from './BatchProvisionUsersRequestItem';

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
