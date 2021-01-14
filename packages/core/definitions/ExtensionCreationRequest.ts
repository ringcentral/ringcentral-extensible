import {
  ContactInfoCreationRequest,
  CustomFieldInfo,
  ReferenceInfo,
  RegionalSettings,
  SiteInfo,
  ExtensionStatusInfo,
} from './index';

class ExtensionCreationRequest {
  /**
   */
  contact?: ContactInfoCreationRequest;

  /**
   * Number of extension
   */
  extensionNumber?: string;

  /**
   */
  customFields?: CustomFieldInfo[];

  /**
   * Password for extension. If not specified, the password is auto-generated
   */
  password?: string;

  /**
   * List of non-RC internal identifiers assigned to an extension
   */
  references?: ReferenceInfo[];

  /**
   */
  regionalSettings?: RegionalSettings;

  /**
   * Additional extension identifier, created by partner application and applied on client side
   */
  partnerId?: string;

  /**
   * IVR PIN
   */
  ivrPin?: string;

  /**
   * Specifies extension configuration wizard state (web service setup).
   * Default: NotStarted
   */
  setupWizardState?: 'NotStarted' | 'Incomplete' | 'Completed';

  /**
   */
  site?: SiteInfo;

  /**
   * Extension current state
   */
  status?: 'Enabled' | 'Disabled' | 'NotActivated' | 'Unassigned' | 'Frozen';

  /**
   */
  statusInfo?: ExtensionStatusInfo;

  /**
   * Extension type
   */
  type?:
    | 'User'
    | 'VirtualUser'
    | 'DigitalUser'
    | 'Department'
    | 'Announcement'
    | 'Voicemail'
    | 'SharedLinesGroup'
    | 'PagingOnly'
    | 'ParkLocation'
    | 'Limited';

  /**
   * Hides extension from showing in company directory. Supported for extensions of User type only. For unassigned extensions the value is set to 'True' by default. For assigned extensions the value is set to 'False' by default
   */
  hidden?: boolean;
}

export default ExtensionCreationRequest;
