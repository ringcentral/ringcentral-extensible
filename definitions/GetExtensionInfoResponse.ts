import GetExtensionAccountInfo from './GetExtensionAccountInfo'
import ContactInfo from './ContactInfo'
import DepartmentInfo from './DepartmentInfo'
import ExtensionPermissions from './ExtensionPermissions'
import ProfileImageInfo from './ProfileImageInfo'
import ReferenceInfo from './ReferenceInfo'
import Roles from './Roles'
import RegionalSettings from './RegionalSettings'
import ExtensionServiceFeatureInfo from './ExtensionServiceFeatureInfo'
import ExtensionStatusInfo from './ExtensionStatusInfo'
import CallQueueExtensionInfo from './CallQueueExtensionInfo'
import AutomaticLocationUpdatesSiteInfo from './AutomaticLocationUpdatesSiteInfo'

class GetExtensionInfoResponse
{
    /**
     * Internal identifier of an extension
     * Required
     */
    id: number

    /**
     * Canonical URI of an extension
     * Required
     */
    uri: string

    /**
     * Account information
     */
    account: GetExtensionAccountInfo

    /**
     * Contact detailed information
     */
    contact: ContactInfo

    /**
     * Information on department extension(s), to which the requested extension belongs. Returned only for user extensions, members of department, requested by single extensionId
     */
    departments: DepartmentInfo[]

    /**
     * Number of department extension
     */
    extensionNumber: string

    /**
     * Extension name. For user extension types the value is a combination of the specified first name and last name
     */
    name: string

    /**
     * For Partner Applications Internal identifier of an extension created by partner. The RingCentral supports the mapping of accounts and stores the corresponding account ID/extension ID for each partner ID of a client application. In request URIs partner IDs are accepted instead of regular RingCentral native IDs as path parameters using pid = XXX clause. Though in response URIs contain the corresponding account IDs and extension IDs. In all request and response bodies these values are reflected via partnerId attributes of account and extension
     */
    partnerId: string

    /**
     */
    permissions: ExtensionPermissions

    /**
     * Information on profile image
     */
    profileImage: ProfileImageInfo

    /**
     * List of non-RC internal identifiers assigned to an extension
     */
    references: ReferenceInfo[]

    /**
     */
    roles: Roles[]

    /**
     * Extension region data (timezone, home country, language)
     */
    regionalSettings: RegionalSettings

    /**
     * Extension service features returned in response only when the logged-in user requests his/her own extension info, see also Extension Service Features
     */
    serviceFeatures: ExtensionServiceFeatureInfo[]

    /**
     * Specifies extension configuration wizard state (web service setup).
     * Default: NotStarted
     * Enum: NotStarted, Incomplete, Completed
     */
    setupWizardState: string

    /**
     * Extension current state. If 'Unassigned' is specified, then extensions without ‘extensionNumber’ are returned. If not specified, then all extensions are returned
     * Enum: Enabled, Disabled, Frozen, NotActivated, Unassigned
     */
    status: string

    /**
     * Status information (reason, comment). Returned for 'Disabled' status only
     */
    statusInfo: ExtensionStatusInfo

    /**
     * Extension type
     * Enum: User, FaxUser, VirtualUser, DigitalUser, Department, Announcement, Voicemail, SharedLinesGroup, PagingOnly, IvrMenu, ApplicationExtension, ParkLocation, Bot, Room, Limited, Site
     */
    type: string

    /**
     * For Department extension type only. Call queue settings
     */
    callQueueInfo: CallQueueExtensionInfo

    /**
     * Hides extension from showing in company directory. Supported for extensions of User type only
     */
    hidden: boolean

    /**
     * Site data. If multi-site feature is turned on for the account, then internal identifier of a site must be specified. To assign the wireless point to the main site (company) set site ID to `main-site`
     */
    site: AutomaticLocationUpdatesSiteInfo
}

export default GetExtensionInfoResponse