import GetMessageInfoResponse from './GetMessageInfoResponse'
import SyncInfoMessages from './SyncInfoMessages'

class GetMessageSyncResponse
{
    /**
     * Link to the message sync resource
     */
    uri: string

    /**
     * List of message records with synchronization information
     * Required
     */
    records: GetMessageInfoResponse[]

    /**
     * Sync type, token and time
     * Required
     */
    syncInfo: SyncInfoMessages
}

export default GetMessageSyncResponse