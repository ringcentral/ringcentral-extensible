import PersonalContactResource from './PersonalContactResource'
import SyncInfo from './SyncInfo'

class AddressBookSync
{
    /**
     */
    uri: string

    /**
     */
    records: PersonalContactResource[]

    /**
     */
    syncInfo: SyncInfo

    /**
     */
    nextPageId: number

    /**
     */
    nextPageUri: string
}

export default AddressBookSync