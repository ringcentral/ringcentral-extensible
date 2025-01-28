import ContactInfo from "./ContactInfo";
import CostCenterInfo from "./CostCenterInfo";
import CustomFieldInfo from "./CustomFieldInfo";
import ExtensionPermissions from "./ExtensionPermissions";
import ProfileImageInfo from "./ProfileImageInfo";
import ReferenceInfo from "./ReferenceInfo";
import RegionalSettings from "./RegionalSettings";
import ExtensionServiceFeatureInfo from "./ExtensionServiceFeatureInfo";
import ProvisioningSiteInfo from "./ProvisioningSiteInfo";
import ExtensionStatusInfo from "./ExtensionStatusInfo";
import AssignedCountryInfo from "./AssignedCountryInfo";

interface ExtensionCreationResponse {
  /**
   * Internal identifier of an extension
   * Format: int64
   */
  id?: number;

  /**
   * Canonical URI of an extension
   * Format: uri
   */
  uri?: string;

  /** */
  contact?: ContactInfo;

  /** */
  costCenter?: CostCenterInfo;

  /** */
  customFields?: CustomFieldInfo[];

  /**
   * Extension number
   */
  extensionNumber?: string;

  /**
   * Extension name. For user extension types the value is a combination
   *  of the specified first name and last name
   */
  name?: string;

  /**
   * For Partner Applications Internal identifier of an extension
   *  created by partner. The RingCentral supports the mapping of accounts and
   *  stores the corresponding account ID/extension ID for each partner ID of
   *  a client application. In request URIs partner IDs are accepted instead
   *  of regular RingCentral native IDs as path parameters using `pid=XXX` clause.
   *  Though in response URIs contain the corresponding account IDs and extension
   *  IDs. In all request and response bodies these values are reflected via
   *  partnerId attributes of account and extension
   */
  partnerId?: string;

  /** */
  permissions?: ExtensionPermissions;

  /** */
  profileImage?: ProfileImageInfo;

  /**
   * List of non-RC internal identifiers assigned to an extension
   */
  references?: ReferenceInfo[];

  /** */
  regionalSettings?: RegionalSettings;

  /**
   * Extension service features returned in response only when the
   *  logged-in user requests his/her own extension info, see also Extension
   *  Service Features
   */
  serviceFeatures?: ExtensionServiceFeatureInfo[];

  /**
   * Initial configuration wizard state
   * Default: NotStarted
   */
  setupWizardState?: "NotStarted" | "Incomplete" | "Completed";

  /** */
  site?: ProvisioningSiteInfo;

  /**
   * Extension status
   */
  status?: "Enabled" | "Disabled" | "Frozen" | "NotActivated" | "Unassigned";

  /** */
  statusInfo?: ExtensionStatusInfo;

  /**
   * Extension type. Please note that legacy 'Department' extension type
   *  corresponds to 'Call Queue' extensions in modern RingCentral product terminology
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
   * Hides an extension from showing in company directory. Supported
   *  for extensions of 'User' type only
   */
  hidden?: boolean;

  /** */
  assignedCountry?: AssignedCountryInfo;
}

export default ExtensionCreationResponse;
