class SyncInfo {
  /**
   */
  syncType?: ('FSync' | 'ISync')

  /**
   */
  syncToken?: string

  /**
   */
  syncTime?: string

  /**
   */
  olderRecordsExist?: boolean
}

export default SyncInfo
