import type CallQueueInfoRequest from "./CallQueueInfoRequest.js";
import type ContactInfoUpdateRequest from "./ContactInfoUpdateRequest.js";
import type CustomFieldInfo from "./CustomFieldInfo.js";
import type ExtensionRegionalSettingRequest from "./ExtensionRegionalSettingRequest.js";
import type ExtensionStatusInfo from "./ExtensionStatusInfo.js";
import type ReferenceInfo from "./ReferenceInfo.js";
import type SiteReference from "./SiteReference.js";
import type UserTransitionInfo from "./UserTransitionInfo.js";

interface ExtensionUpdateRequest {
  /**
   * Extension status
   */
  status?: "Enabled" | "Disabled" | "Frozen" | "NotActivated";

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
    | "DigitalSignageOnlyRooms"
    | "Unknown"
    | "Emergency";

  /**
   * List of non-RC internal identifiers assigned to an extension
   */
  references?: ReferenceInfo[];
}

export default ExtensionUpdateRequest;
