import UserCallLogRecord from './UserCallLogRecord'
import SyncInfoCallLog from './SyncInfoCallLog'

class CallLogSync
{
    /// <summary>
    /// Link to the list of call log records with sync information
    /// </summary>
    uri: string

    /// <summary>
    /// List of call log records with synchronization information. For ISync the total number of returned records is limited to 250; this includes both new records and the old ones, specified by the recordCount parameter
    /// </summary>
    records: UserCallLogRecord[]

    /// <summary>
    /// Sync information (type, token and time)
    /// </summary>
    syncInfo: SyncInfoCallLog
}

export default CallLogSync