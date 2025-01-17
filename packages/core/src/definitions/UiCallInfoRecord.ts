interface UiCallInfoRecord {
  /**
   * UI call info type
   */
  type?: 'QueueName' | 'CallerIdName';

  /**
   * UI call info value
   * Example: John Doe
   */
  value?: string;
}

export default UiCallInfoRecord;
