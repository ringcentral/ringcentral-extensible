import { CallQueueId } from '.'

class ExtensionCallQueueUpdatePresence
{
  /**
   * Call queue information
   */
  callQueue?: CallQueueId

  /**
   * Call queue agent availability for calls of this queue
   */
  acceptCalls?: boolean
}

export default ExtensionCallQueueUpdatePresence
