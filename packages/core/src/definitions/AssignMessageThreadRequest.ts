import type AssignMessageThreadRequestAssignee from "./AssignMessageThreadRequestAssignee.js";

/**
 * Assignee extension information (can be `null` to unassign the thread)
 *
 */
interface AssignMessageThreadRequest {
  /**
   * Required
   */
  assignee?: AssignMessageThreadRequestAssignee;
}

export default AssignMessageThreadRequest;
