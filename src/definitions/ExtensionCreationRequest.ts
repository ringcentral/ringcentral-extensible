import ContactInfoCreationRequest from './ContactInfoCreationRequest'
import ReferenceInfo from './ReferenceInfo'
import Roles from './Roles'
import RegionalSettings from './RegionalSettings'
import ExtensionStatusInfo from './ExtensionStatusInfo'

class ExtensionCreationRequest
{
  /**
   * Contact Information
   * Required
   */
  contact?: ContactInfoCreationRequest

  /**
   * Number of extension
   */
  extensionNumber?: string

  /**
   * Password for extension. If not specified, the password is auto-generated
   */
  password?: string

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
   * Specifies extension configuration wizard state (web service setup).
   * Default: NotStarted
   * Enum: NotStarted, Incomplete, Completed
   */
  setupWizardState?: string

  /**
   * Extension current state
   * Enum: Enabled, Disabled, NotActivated, Unassigned
   */
  status?: string

  /**
   * Status information (reason, comment). For 'Disabled' status only
   */
  statusInfo?: ExtensionStatusInfo

  /**
   * Extension type
   * Required
   * Enum: User, VirtualUser, DigitalUser, Department, Announcement, Voicemail, SharedLinesGroup, PagingOnly, ParkLocation
   */
  type?: string

  /**
   * Hides extension from showing in company directory. Supported for extensions of User type only. For unassigned extensions the value is set to 'True' by default. For assigned extensions the value is set to 'False' by default
   */
  hidden?: boolean
}

export default ExtensionCreationRequest
