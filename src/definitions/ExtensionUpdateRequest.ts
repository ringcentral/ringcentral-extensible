import { ExtensionStatusInfo, ContactInfoUpdateRequest, ExtensionRegionalSettingRequest, CallQueueInfoRequest, UserTransitionInfo, CustomFieldInfo, AutomaticLocationUpdatesSiteInfo } from '.'

class ExtensionUpdateRequest {
  /**
   */
  status?: ('Disabled' | 'Enabled' | 'NotActivated' | 'Frozen')

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
   */
  setupWizardState?: ('NotStarted' | 'Incomplete' | 'Completed')

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

  /**
   */
  customFields?: CustomFieldInfo[]

  /**
   * Hides extension from showing in company directory. Supported for extensions of User type only
   */
  hidden?: boolean

  /**
   * Site data. If multi-site feature is turned on for the account, then internal identifier of a site must be specified. To assign the wireless point to the main site (company) set site ID to `main-site`
   */
  site?: AutomaticLocationUpdatesSiteInfo

  /**
   * Extension type
   */
  type?: ('User' | 'Fax User' | 'VirtualUser' | 'DigitalUser' | 'Department' | 'Announcement' | 'Voicemail' | 'SharedLinesGroup' | 'PagingOnly' | 'IvrMenu' | 'ApplicationExtension' | 'ParkLocation')
}

export default ExtensionUpdateRequest
