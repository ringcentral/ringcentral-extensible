import type QueueShortInfoResource from "./QueueShortInfoResource";

interface UserCallQueues {
  /**
   * List of queues where an extension is an agent
   */
  records?: QueueShortInfoResource[];
}

export default UserCallQueues;
