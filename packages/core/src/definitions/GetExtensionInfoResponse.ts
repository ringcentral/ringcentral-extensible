import GetExtensionAccountInfo from "./GetExtensionAccountInfo";
import ContactInfo from "./ContactInfo";
import CostCenterInfo from "./CostCenterInfo";
import CustomFieldInfo from "./CustomFieldInfo";
import DepartmentInfo from "./DepartmentInfo";
import ExtensionPermissions from "./ExtensionPermissions";
import ProfileImageInfo from "./ProfileImageInfo";
import ReferenceInfo from "./ReferenceInfo";
import Roles from "./Roles";
import RegionalSettings from "./RegionalSettings";
import ExtensionServiceFeatureInfo from "./ExtensionServiceFeatureInfo";
import ExtensionStatusInfo from "./ExtensionStatusInfo";
import CallQueueExtensionInfo from "./CallQueueExtensionInfo";
import ProvisioningSiteInfo from "./ProvisioningSiteInfo";
import AssignedCountryInfo from "./AssignedCountryInfo";

interface GetExtensionInfoResponse {
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
  account?: GetExtensionAccountInfo;

  /** */
  contact?: ContactInfo;

  /** */
  costCenter?: CostCenterInfo;

  /** */
  customFields?: CustomFieldInfo[];

  /**
   * Information on department extension(s), to which the requested
   *  extension belongs. Returned only for user extensions, members of
   *  department, requested by single extensionId. Please note that
   *  legacy 'Department' extension type corresponds to 'Call Queue'
   *  extensions in modern RingCentral product terminology
   */
  departments?: DepartmentInfo[];

  /**
   * Extension short number
   */
  extensionNumber?: string;

  /** */
  extensionNumbers?: string[];

  /**
   * Extension name. For user extension types the value is a combination
   *  of the specified first name and last name
   */
  name?: string;

  /**
   * For Partner Applications Internal identifier of an extension
   *  created by partner. The RingCentral supports mapping of accounts and
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
  roles?: Roles[];

  /** */
  regionalSettings?: RegionalSettings;

  /**
   * Extension service features is returned in response only when the
   *  logged-in user requests their own extension info, see also Extension
   *  Service Features
   */
  serviceFeatures?: ExtensionServiceFeatureInfo[];

  /**
   * Initial configuration wizard state
   * Default: NotStarted
   */
  setupWizardState?: "NotStarted" | "Incomplete" | "Completed";

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
    | "Bot"
    | "Room"
    | "RoomConnector"
    | "Limited"
    | "Site"
    | "ProxyAdmin"
    | "DelegatedLinesGroup"
    | "GroupCallPickup";

  /**
   * Extension subtype, if applicable. For any unsupported subtypes the
   *  `Unknown` value will be returned
   */
  subType?:
    | "VideoPro"
    | "VideoProPlus"
    | "DigitalSignage"
    | "Unknown"
    | "Emergency";

  /** */
  callQueueInfo?: CallQueueExtensionInfo;

  /**
   * Hides extension from showing in company directory. Supported for
   *  extensions of User type only
   */
  hidden?: boolean;

  /** */
  site?: ProvisioningSiteInfo;

  /** */
  assignedCountry?: AssignedCountryInfo;

  /**
   * Extension creation date/time, in ISO 8601 format
   * Format: date-time
   * Example: 2024-06-06T07:01:14.123Z
   */
  creationTime?: string;

  /**
   * Site access status for cross-site limitation
   */
  siteAccess?: "Limited" | "Unlimited";
}

export default GetExtensionInfoResponse;
