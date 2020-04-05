import CompanyCallLogRecord from './CompanyCallLogRecord'
import CompanyCallLogSyncInfo from './CompanyCallLogSyncInfo'

class AccountCallLogSyncResponse
{
    /// <summary>
    /// List of call log records with synchronization information. For 'ISync' the total number of returned records is limited to 250; this includes both new records and the old ones, specified by the recordCount parameter
    /// </summary>
    records: CompanyCallLogRecord[]

    /// <summary>
    /// Sync information (type, token and time)
    /// </summary>
    syncInfo: CompanyCallLogSyncInfo
}

export default AccountCallLogSyncResponse