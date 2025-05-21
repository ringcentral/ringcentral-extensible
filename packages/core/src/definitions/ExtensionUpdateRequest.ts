import ExtensionStatusInfo from "./ExtensionStatusInfo.js";
import ContactInfoUpdateRequest from "./ContactInfoUpdateRequest.js";
import ExtensionRegionalSettingRequest from "./ExtensionRegionalSettingRequest.js";
import CallQueueInfoRequest from "./CallQueueInfoRequest.js";
import UserTransitionInfo from "./UserTransitionInfo.js";
import CustomFieldInfo from "./CustomFieldInfo.js";
import SiteReference from "./SiteReference.js";
import ReferenceInfo from "./ReferenceInfo.js";

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
   * Extension subtype, if applicable.
   *  For unrecognized subtypes the `Unknown` value is returned
   */
  subType?:
    | "VideoPro"
    | "VideoProPlus"
    | "DigitalSignage"
    | "Unknown"
    | "Emergency";

  /**
   * List of non-RC internal identifiers assigned to an extension
   */
  references?: ReferenceInfo[];
}

export default ExtensionUpdateRequest;
