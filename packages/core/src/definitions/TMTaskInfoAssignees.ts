interface TMTaskInfoAssignees {
  /**
   * Internal identifier of an assignee
   */
  id?: string;

  /**
   * Task execution status by assignee
   */
  status?: 'Pending' | 'Completed';
}

export default TMTaskInfoAssignees;
