interface CallQueueOverflowAgent {
  /**
   * Internal identifier of a Call queue extension
   */
  id?: string;

  /**
   * Extension number of call queue
   */
  extensionNumber?: string;

  /**
   * Name of a call queue
   */
  name?: string;

  /**
   * Queue current state (Enabled/Disabled)
   */
  status?: 'Disabled' | 'Enabled';
}

export default CallQueueOverflowAgent;
