import GetMessageInfoResponse from './GetMessageInfoResponse'
import SyncInfoMessages from './SyncInfoMessages'

class GetMessageSyncResponse
{
    /// <summary>
    /// Link to the message sync resource
    /// </summary>
    uri: string

    /// <summary>
    /// List of message records with synchronization information
    /// Required
    /// </summary>
    records: GetMessageInfoResponse[]

    /// <summary>
    /// Sync type, token and time
    /// Required
    /// </summary>
    syncInfo: SyncInfoMessages
}

export default GetMessageSyncResponse