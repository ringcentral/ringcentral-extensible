import ContactInfo from './ContactInfo'
import ExtensionPermissions from './ExtensionPermissions'
import ProfileImageInfo from './ProfileImageInfo'
import ReferenceInfo from './ReferenceInfo'
import Roles from './Roles'
import RegionalSettings from './RegionalSettings'
import ExtensionServiceFeatureInfo from './ExtensionServiceFeatureInfo'
import AutomaticLocationUpdatesSiteInfo from './AutomaticLocationUpdatesSiteInfo'
import ExtensionStatusInfo from './ExtensionStatusInfo'

class ExtensionCreationResponse
{
  /**
   * Internal identifier of an extension
   */
  id?: number

  /**
   * Canonical URI of an extension
   */
  uri?: string

  /**
   * Contact detailed information
   */
  contact?: ContactInfo

  /**
   * Number of department extension
   */
  extensionNumber?: string

  /**
   * Extension name. For user extension types the value is a combination of the specified first name and last name
   */
  name?: string

  /**
   * For Partner Applications Internal identifier of an extension created by partner. The RingCentral supports the mapping of accounts and stores the corresponding account ID/extension ID for each partner ID of a client application. In request URIs partner IDs are accepted instead of regular RingCentral native IDs as path parameters using pid = XXX clause. Though in response URIs contain the corresponding account IDs and extension IDs. In all request and response bodies these values are reflected via partnerId attributes of account and extension
   */
  partnerId?: string

  /**
   */
  permissions?: ExtensionPermissions

  /**
   * Information on profile image
   */
  profileImage?: ProfileImageInfo

  /**
   * List of non-RC internal identifiers assigned to an extension
   */
  references?: ReferenceInfo[]

  /**
   */
  roles?: Roles[]

  /**
   * Extension region data (timezone, home country, language)
   */
  regionalSettings?: RegionalSettings

  /**
   * Extension service features returned in response only when the logged-in user requests his/her own extension info, see also Extension Service Features
   */
  serviceFeatures?: ExtensionServiceFeatureInfo[]

  /**
   * Specifies extension configuration wizard state (web service setup). The default value is 'NotStarted'
   */
  setupWizardState?: ('NotStarted' | 'Incomplete' | 'Completed')

  /**
   * Site data. If multi-site feature is turned on for the account, then internal identifier of a site must be specified. To assign the wireless point to the main site (company) set site ID to `main-site`
   */
  site?: AutomaticLocationUpdatesSiteInfo

  /**
   * Extension current state. If 'Unassigned' is specified, then extensions without ‘extensionNumber’ are returned. If not specified, then all extensions are returned
   */
  status?: ('Enabled' | 'Disabled' | 'Frozen' | 'NotActivated' | 'Unassigned')

  /**
   * Status information (reason, comment). Returned for 'Disabled' status only
   */
  statusInfo?: ExtensionStatusInfo

  /**
   * Extension type
   */
  type?: ('User' | 'VirtualUser' | 'DigitalUser' | 'Department' | 'Announcement' | 'Voicemail' | 'SharedLinesGroup' | 'PagingOnly' | 'ParkLocation' | 'Limited')

  /**
   * Hides extension from showing in company directory. Supported for extensions of User type only
   */
  hidden?: boolean
}

export default ExtensionCreationResponse
