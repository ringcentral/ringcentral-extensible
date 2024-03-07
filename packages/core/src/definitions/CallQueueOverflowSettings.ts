import type CallQueueInfo from './CallQueueInfo';

interface CallQueueOverflowSettings {
  /**
   * Call queue overflow status
   */
  enabled?: boolean;

  /**
   */
  items?: CallQueueInfo[];
}

export default CallQueueOverflowSettings;
