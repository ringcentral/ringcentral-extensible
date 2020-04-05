import ContactInfoCreationRequest from './ContactInfoCreationRequest'
import ReferenceInfo from './ReferenceInfo'
import Roles from './Roles'
import RegionalSettings from './RegionalSettings'
import ExtensionStatusInfo from './ExtensionStatusInfo'

class ExtensionCreationRequest
{
    /// <summary>
    /// Contact Information
    /// Required
    /// </summary>
    contact: ContactInfoCreationRequest

    /// <summary>
    /// Number of extension
    /// </summary>
    extensionNumber: string

    /// <summary>
    /// Password for extension. If not specified, the password is auto-generated
    /// </summary>
    password: string

    /// <summary>
    /// List of non-RC internal identifiers assigned to an extension
    /// </summary>
    references: ReferenceInfo[]

    /// <summary>
    /// </summary>
    roles: Roles[]

    /// <summary>
    /// Extension region data (timezone, home country, language)
    /// </summary>
    regionalSettings: RegionalSettings

    /// <summary>
    /// Specifies extension configuration wizard state (web service setup).
    /// Default: NotStarted
    /// Enum: NotStarted, Incomplete, Completed
    /// </summary>
    setupWizardState: string

    /// <summary>
    /// Extension current state
    /// Enum: Enabled, Disabled, NotActivated, Unassigned
    /// </summary>
    status: string

    /// <summary>
    /// Status information (reason, comment). For 'Disabled' status only
    /// </summary>
    statusInfo: ExtensionStatusInfo

    /// <summary>
    /// Extension type
    /// Required
    /// Enum: User, VirtualUser, DigitalUser, Department, Announcement, Voicemail, SharedLinesGroup, PagingOnly, ParkLocation
    /// </summary>
    type: string

    /// <summary>
    /// Hides extension from showing in company directory. Supported for extensions of User type only. For unassigned extensions the value is set to 'True' by default. For assigned extensions the value is set to 'False' by default
    /// </summary>
    hidden: boolean
}

export default ExtensionCreationRequest