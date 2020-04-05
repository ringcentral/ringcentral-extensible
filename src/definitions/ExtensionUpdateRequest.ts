import ExtensionStatusInfo from './ExtensionStatusInfo'
import ContactInfoUpdateRequest from './ContactInfoUpdateRequest'
import ExtensionRegionalSettingRequest from './ExtensionRegionalSettingRequest'
import CallQueueInfoRequest from './CallQueueInfoRequest'
import UserTransitionInfo from './UserTransitionInfo'

class ExtensionUpdateRequest
{
    /**
     * Enum: Disabled, Enabled, NotActivated
     */
    status?: string

    /**
     */
    statusInfo?: ExtensionStatusInfo

    /**
     * Type of suspension
     */
    reason?: string

    /**
     * Free Form user comment
     */
    comment?: string

    /**
     * Extension number available
     */
    extensionNumber?: string

    /**
     */
    contact?: ContactInfoUpdateRequest

    /**
     */
    regionalSettings?: ExtensionRegionalSettingRequest

    /**
     * Enum: NotStarted, Incomplete, Completed
     */
    setupWizardState?: string

    /**
     * Extension partner identifier
     */
    partnerId?: string

    /**
     * IVR PIN
     */
    ivrPin?: string

    /**
     * Password for extension
     */
    password?: string

    /**
     * For Department extension type only. Call queue settings
     */
    callQueueInfo?: CallQueueInfoRequest

    /**
     */
    transition?: UserTransitionInfo[]
}

export default ExtensionUpdateRequest