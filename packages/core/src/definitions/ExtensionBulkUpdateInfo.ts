import ExtensionStatusInfo from "./ExtensionStatusInfo.js";
import ContactInfoUpdateRequest from "./ContactInfoUpdateRequest.js";
import ExtensionRegionalSettingRequest from "./ExtensionRegionalSettingRequest.js";
import CallQueueInfoRequest from "./CallQueueInfoRequest.js";
import UserTransitionInfo from "./UserTransitionInfo.js";
import CostCenterInfo from "./CostCenterInfo.js";
import CustomFieldInfo from "./CustomFieldInfo.js";
import ProvisioningSiteInfo from "./ProvisioningSiteInfo.js";
import ReferenceInfo from "./ReferenceInfo.js";

interface ExtensionBulkUpdateInfo {
  /**
   * Internal identifier of an extension
   */
  id?: string;

  /**
   * Extension status
   */
  status?: "Enabled" | "Disabled" | "Frozen" | "NotActivated";

  /** */
  statusInfo?: ExtensionStatusInfo;

  /**
   * Type of suspension
   */
  reason?: string;

  /**
   * Free form user comment
   */
  comment?: string;

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
   * Additional extension identifier created by partner application
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
  costCenter?: CostCenterInfo;

  /** */
  customFields?: CustomFieldInfo[];

  /**
   * Hides extension from showing in company directory. Supported for extensions of User type only
   */
  hidden?: boolean;

  /** */
  site?: ProvisioningSiteInfo;

  /**
   * Extension type. Please note that legacy 'Department' extension
   *  type corresponds to 'Call Queue' extensions in modern RingCentral
   *  product terminology
   */
  type?:
    | "User"
    | "FaxUser"
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
    | "DelegatedLinesGroup";

  /**
   * List of non-RC internal identifiers assigned to an extension
   */
  references?: ReferenceInfo[];
}

export default ExtensionBulkUpdateInfo;
