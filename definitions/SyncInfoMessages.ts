class SyncInfoMessages
{
    /// <summary>
    /// Type of synchronization
    /// Enum: FSync, ISync
    /// </summary>
    syncType: string

    /// <summary>
    /// Synchronization token
    /// </summary>
    syncToken: string

    /// <summary>
    /// Last synchronization datetime in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z
    /// </summary>
    syncTime: string

    /// <summary>
    /// </summary>
    olderRecordsExist: boolean
}

export default SyncInfoMessages