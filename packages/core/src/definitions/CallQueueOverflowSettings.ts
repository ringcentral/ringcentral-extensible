import type CallQueueOverflowAgent from './CallQueueOverflowAgent';

interface CallQueueOverflowSettings {
  /**
   * Call queue overflow status
   */
  enabled?: boolean;

  /**
   */
  items?: CallQueueOverflowAgent[];
}

export default CallQueueOverflowSettings;
