import ExtensionStatusInfo from "./ExtensionStatusInfo";
import ContactInfoUpdateRequest from "./ContactInfoUpdateRequest";
import ExtensionRegionalSettingRequest from "./ExtensionRegionalSettingRequest";
import CallQueueInfoRequest from "./CallQueueInfoRequest";
import UserTransitionInfo from "./UserTransitionInfo";
import CustomFieldInfo from "./CustomFieldInfo";
import SiteReference from "./SiteReference";
import ReferenceInfo from "./ReferenceInfo";

interface ExtensionUpdateRequest {
  /**
   * Extension status
   */
  status?: "Enabled" | "Disabled" | "Frozen" | "NotActivated";

  /** */
  statusInfo?: ExtensionStatusInfo;

  /**
   * Extension number available
   */
  extensionNumber?: string;

  /** */
  contact?: ContactInfoUpdateRequest;

  /** */
  regionalSettings?: ExtensionRegionalSettingRequest;

  /**
   * Initial configuration wizard state
   * Default: NotStarted
   */
  setupWizardState?: "NotStarted" | "Incomplete" | "Completed";

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

  /** */
  callQueueInfo?: CallQueueInfoRequest;

  /** */
  transition?: UserTransitionInfo;

  /** */
  customFields?: CustomFieldInfo[];

  /** */
  site?: SiteReference;

  /**
   * Extension type. Please note that legacy 'Department' extension
   *  type corresponds to 'Call Queue' extensions in modern RingCentral
   *  product terminology
   */
  type?:
    | "User"
    | "FaxUser"
    | "FlexibleUser"
    | "VirtualUser"
    | "DigitalUser"
    | "Department"
    | "Announcement"
    | "Voicemail"
    | "SharedLinesGroup"
    | "PagingOnly"
    | "IvrMenu"
    | "ApplicationExtension"
    | "ParkLocation"
    | "DelegatedLinesGroup"
    | "GroupCallPickup";

  /**
   * Extension subtype, if applicable. For any unsupported subtypes
   *  the 'Unknown' value will be returned
   */
  subType?:
    | "VideoPro"
    | "VideoProPlus"
    | "DigitalSignageOnlyRooms"
    | "Unknown"
    | "Emergency";

  /**
   * List of non-RC internal identifiers assigned to an extension
   */
  references?: ReferenceInfo[];
}

export default ExtensionUpdateRequest;
