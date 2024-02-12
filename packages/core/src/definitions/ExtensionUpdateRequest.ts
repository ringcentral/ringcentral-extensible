import type ExtensionStatusInfo from './ExtensionStatusInfo';
import type ContactInfoUpdateRequest from './ContactInfoUpdateRequest';
import type ExtensionRegionalSettingRequest from './ExtensionRegionalSettingRequest';
import type CallQueueInfoRequest from './CallQueueInfoRequest';
import type UserTransitionInfo from './UserTransitionInfo';
import type CustomFieldInfo from './CustomFieldInfo';
import type SiteReference from './SiteReference';
import type ReferenceInfo from './ReferenceInfo';

interface ExtensionUpdateRequest {
  /**
   */
  status?: 'Disabled' | 'Enabled' | 'NotActivated' | 'Frozen';

  /**
   */
  statusInfo?: ExtensionStatusInfo;

  /**
   * Extension number available
   */
  extensionNumber?: string;

  /**
   */
  contact?: ContactInfoUpdateRequest;

  /**
   */
  regionalSettings?: ExtensionRegionalSettingRequest;

  /**
   */
  setupWizardState?: 'NotStarted' | 'Incomplete' | 'Completed';

  /**
   * Additional extension identifier, created by partner application
   *  and applied on client side
   */
  partnerId?: string;

  /**
   * IVR PIN
   */
  ivrPin?: string;

  /**
   * Password for extension
   */
  password?: string;

  /**
   */
  callQueueInfo?: CallQueueInfoRequest;

  /**
   */
  transition?: UserTransitionInfo;

  /**
   */
  customFields?: CustomFieldInfo[];

  /**
   */
  site?: SiteReference;

  /**
   * Extension type. Please note that legacy 'Department' extension
   *  type corresponds to 'Call Queue' extensions in modern RingCentral
   *  product terminology
   */
  type?:
    | 'User'
    | 'FaxUser'
    | 'FlexibleUser'
    | 'VirtualUser'
    | 'DigitalUser'
    | 'Department'
    | 'Announcement'
    | 'Voicemail'
    | 'SharedLinesGroup'
    | 'PagingOnly'
    | 'IvrMenu'
    | 'ApplicationExtension'
    | 'ParkLocation'
    | 'DelegatedLinesGroup'
    | 'GroupCallPickup';

  /**
   * Extension subtype, if applicable. For any unsupported subtypes
   *  the 'Unknown' value will be returned
   */
  subType?: 'VideoPro' | 'VideoProPlus' | 'DigitalSignageOnlyRooms' | 'Unknown';

  /**
   * List of non-RC internal identifiers assigned to an extension
   */
  references?: ReferenceInfo[];
}

export default ExtensionUpdateRequest;
