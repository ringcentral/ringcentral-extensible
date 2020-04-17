import { ExtensionContactInfo, Reference, StatusInfo, DepartmentResource, ServiceFeatureValue, RegionalSettingsInfo, ExtensionPermissionsResource, ProfileImageResource } from '.'

class ExtensionResourceIntId
{
  /**
   */
  uri?: string

  /**
   */
  id?: number

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

export default ExtensionResourceIntId
