import CompanyCallLogRecord from './CompanyCallLogRecord'
import CompanyCallLogSyncInfo from './CompanyCallLogSyncInfo'

class AccountCallLogSyncResponse
{
    /**
     * List of call log records with synchronization information. For 'ISync' the total number of returned records is limited to 250; this includes both new records and the old ones, specified by the recordCount parameter
     */
    records?: CompanyCallLogRecord[]

    /**
     * Sync information (type, token and time)
     */
    syncInfo?: CompanyCallLogSyncInfo
}

export default AccountCallLogSyncResponse