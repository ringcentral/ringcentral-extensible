import QueueShortInfoResource from './QueueShortInfoResource';

interface UserCallQueues {
  /**
   * List of the queues where the extension is an agent
   */
  records?: QueueShortInfoResource[];
}

export default UserCallQueues;
