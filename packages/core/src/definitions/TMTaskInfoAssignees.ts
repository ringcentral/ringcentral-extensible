interface TMTaskInfoAssignees {
  /**
   * Assignee Id
   */
  id?: string;

  /**
   * Task execution status by assignee
   */
  status?: 'Pending' | 'Completed';
}

export default TMTaskInfoAssignees;
