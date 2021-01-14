import {CallQueueInfo} from './index';

class ExtensionCallQueuePresence {
  /**
   */
  callQueue?: CallQueueInfo;

  /**
   * Call queue agent availability for calls of this queue
   */
  acceptCalls?: boolean;
}

export default ExtensionCallQueuePresence;
