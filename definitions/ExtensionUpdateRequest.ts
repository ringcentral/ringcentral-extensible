import ExtensionStatusInfo from './ExtensionStatusInfo'
import ContactInfoUpdateRequest from './ContactInfoUpdateRequest'
import ExtensionRegionalSettingRequest from './ExtensionRegionalSettingRequest'
import CallQueueInfoRequest from './CallQueueInfoRequest'
import UserTransitionInfo from './UserTransitionInfo'

class ExtensionUpdateRequest
{
    /// <summary>
    /// Enum: Disabled, Enabled, NotActivated
    /// </summary>
    status: string

    /// <summary>
    /// </summary>
    statusInfo: ExtensionStatusInfo

    /// <summary>
    /// Type of suspension
    /// </summary>
    reason: string

    /// <summary>
    /// Free Form user comment
    /// </summary>
    comment: string

    /// <summary>
    /// Extension number available
    /// </summary>
    extensionNumber: string

    /// <summary>
    /// </summary>
    contact: ContactInfoUpdateRequest

    /// <summary>
    /// </summary>
    regionalSettings: ExtensionRegionalSettingRequest

    /// <summary>
    /// Enum: NotStarted, Incomplete, Completed
    /// </summary>
    setupWizardState: string

    /// <summary>
    /// Extension partner identifier
    /// </summary>
    partnerId: string

    /// <summary>
    /// IVR PIN
    /// </summary>
    ivrPin: string

    /// <summary>
    /// Password for extension
    /// </summary>
    password: string

    /// <summary>
    /// For Department extension type only. Call queue settings
    /// </summary>
    callQueueInfo: CallQueueInfoRequest

    /// <summary>
    /// </summary>
    transition: UserTransitionInfo[]
}

export default ExtensionUpdateRequest