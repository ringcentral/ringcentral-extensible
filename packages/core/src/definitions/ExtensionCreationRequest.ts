import ContactInfoCreationRequest from "./ContactInfoCreationRequest.js";
import CostCenterInfo from "./CostCenterInfo.js";
import CustomFieldInfo from "./CustomFieldInfo.js";
import ReferenceInfo from "./ReferenceInfo.js";
import RegionalSettings from "./RegionalSettings.js";
import SiteInfo from "./SiteInfo.js";
import ExtensionStatusInfo from "./ExtensionStatusInfo.js";

interface ExtensionCreationRequest {
  /** */
  contact?: ContactInfoCreationRequest;

  /**
   * Extension short number
   */
  extensionNumber?: string;

  /** */
  costCenter?: CostCenterInfo;

  /** */
  customFields?: CustomFieldInfo[];

  /**
   * Password for extension. If not specified, the password is auto-generated
   */
  password?: string;

  /**
   * List of non-RC internal identifiers assigned to an extension
   */
  references?: ReferenceInfo[];

  /** */
  regionalSettings?: RegionalSettings;

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
   * Initial configuration wizard state
   * Default: NotStarted
   */
  setupWizardState?: "NotStarted" | "Incomplete" | "Completed";

  /** */
  site?: SiteInfo;

  /**
   * Extension status
   */
  status?: "Enabled" | "Disabled" | "Frozen" | "NotActivated" | "Unassigned";

  /** */
  statusInfo?: ExtensionStatusInfo;

  /**
   * Extension type. Please note that legacy 'Department' extension type
   *  corresponds to 'Call Queue' extensions in modern RingCentral product
   *  terminology
   */
  type?:
    | "User"
    | "VirtualUser"
    | "DigitalUser"
    | "FlexibleUser"
    | "Department"
    | "Announcement"
    | "Voicemail"
    | "SharedLinesGroup"
    | "PagingOnly"
    | "ParkLocation"
    | "Limited";

  /**
   * Hides extension from showing in company directory. Supported
   *  for extensions of 'User' type only. For unassigned extensions the value
   *  is set to `true` by default. For assigned extensions the value is set
   *  to `false` by default
   */
  hidden?: boolean;

  /**
   * Extension name. For user extension types the value is a combination
   *  of the specified first name and last name
   */
  name?: string;
}

export default ExtensionCreationRequest;
