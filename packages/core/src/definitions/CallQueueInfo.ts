interface CallQueueInfo {
  /**
   * Link to a call queue
   * Format: uri
   */
  uri?: string;

  /**
   * Internal identifier of a call queue
   */
  id?: string;

  /**
   * Extension number of a call queue
   */
  extensionNumber?: string;

  /**
   * Name of a call queue
   */
  name?: string;

  /**
   * Call queue status
   */
  status?: 'Enabled' | 'Disabled' | 'NotActivated';

  /**
   * Indicates whether it is an emergency call queue extension or not
   */
  subType?: 'Emergency';
}

export default CallQueueInfo;
