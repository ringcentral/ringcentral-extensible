import ExtensionContactInfo from './ExtensionContactInfo'
import Reference from './Reference'
import StatusInfo from './StatusInfo'
import DepartmentResource from './DepartmentResource'
import ServiceFeatureValue from './ServiceFeatureValue'
import RegionalSettingsInfo from './RegionalSettingsInfo'
import ExtensionPermissionsResource from './ExtensionPermissionsResource'
import ProfileImageResource from './ProfileImageResource'

class PhoneNumberExtensionInfo
{
  /**
   */
  uri?: string

  /**
   */
  id?: string

  /**
   */
  partnerId?: string

  /**
   */
  extensionNumber?: string

  /**
   */
  loginName?: string

  /**
   */
  contact?: ExtensionContactInfo

  /**
   */
  references?: Reference[]

  /**
   */
  name?: string

  /**
   */
  type?: ('Unknown' | 'User' | 'Department' | 'Announcement' | 'Voicemail' | 'DigitalUser' | 'VirtualUser' | 'FaxUser' | 'PagingOnly' | 'SharedLinesGroup' | 'IvrMenu' | 'ApplicationExtension' | 'ParkLocation')

  /**
   */
  status?: ('Enabled' | 'Disabled' | 'Frozen' | 'NotActivated' | 'Unassigned')

  /**
   */
  statusInfo?: StatusInfo

  /**
   */
  departments?: DepartmentResource[]

  /**
   */
  serviceFeatures?: ServiceFeatureValue[]

  /**
   */
  regionalSettings?: RegionalSettingsInfo

  /**
   */
  setupWizardState?: ('NotStarted' | 'Incomplete' | 'Completed' | 'Unknown')

  /**
   */
  permissions?: ExtensionPermissionsResource

  /**
   */
  password?: string

  /**
   */
  ivrPin?: string

  /**
   */
  profileImage?: ProfileImageResource
}

export default PhoneNumberExtensionInfo