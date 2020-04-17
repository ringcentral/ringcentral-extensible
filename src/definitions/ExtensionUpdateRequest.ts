import { ExtensionStatusInfo, ContactInfoUpdateRequest, ExtensionRegionalSettingRequest, CallQueueInfoRequest, UserTransitionInfo } from '.'

class ExtensionUpdateRequest
{
  /**
   */
  status?: ('Disabled' | 'Enabled' | 'NotActivated')

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
}

export default ExtensionUpdateRequest
