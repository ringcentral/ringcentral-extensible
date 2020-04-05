import ExtensionContactInfo from './ExtensionContactInfo'
import Reference from './Reference'
import StatusInfo from './StatusInfo'
import DepartmentResource from './DepartmentResource'
import ServiceFeatureValue from './ServiceFeatureValue'
import RegionalSettingsInfo from './RegionalSettingsInfo'
import ExtensionPermissionsResource from './ExtensionPermissionsResource'
import ProfileImageResource from './ProfileImageResource'

class ExtensionResourceIntId
{
    /// <summary>
    /// </summary>
    uri: string

    /// <summary>
    /// </summary>
    id: number

    /// <summary>
    /// </summary>
    partnerId: string

    /// <summary>
    /// </summary>
    extensionNumber: string

    /// <summary>
    /// </summary>
    loginName: string

    /// <summary>
    /// </summary>
    contact: ExtensionContactInfo

    /// <summary>
    /// </summary>
    references: Reference[]

    /// <summary>
    /// </summary>
    name: string

    /// <summary>
    /// Enum: Unknown, User, Department, Announcement, Voicemail, DigitalUser, VirtualUser, FaxUser, PagingOnly, SharedLinesGroup, IvrMenu, ApplicationExtension, ParkLocation
    /// </summary>
    type: string

    /// <summary>
    /// Enum: Enabled, Disabled, Frozen, NotActivated, Unassigned
    /// </summary>
    status: string

    /// <summary>
    /// </summary>
    statusInfo: StatusInfo

    /// <summary>
    /// </summary>
    departments: DepartmentResource[]

    /// <summary>
    /// </summary>
    serviceFeatures: ServiceFeatureValue[]

    /// <summary>
    /// </summary>
    regionalSettings: RegionalSettingsInfo

    /// <summary>
    /// Enum: NotStarted, Incomplete, Completed, Unknown
    /// </summary>
    setupWizardState: string

    /// <summary>
    /// </summary>
    permissions: ExtensionPermissionsResource

    /// <summary>
    /// </summary>
    password: string

    /// <summary>
    /// </summary>
    ivrPin: string

    /// <summary>
    /// </summary>
    profileImage: ProfileImageResource
}

export default ExtensionResourceIntId