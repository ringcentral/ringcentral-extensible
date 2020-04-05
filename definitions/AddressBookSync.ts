import PersonalContactResource from './PersonalContactResource'
import SyncInfo from './SyncInfo'

class AddressBookSync
{
    /// <summary>
    /// </summary>
    uri: string

    /// <summary>
    /// </summary>
    records: PersonalContactResource[]

    /// <summary>
    /// </summary>
    syncInfo: SyncInfo

    /// <summary>
    /// </summary>
    nextPageId: number

    /// <summary>
    /// </summary>
    nextPageUri: string
}

export default AddressBookSync