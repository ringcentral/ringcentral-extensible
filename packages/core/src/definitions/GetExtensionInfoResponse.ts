import type GetExtensionAccountInfo from "./GetExtensionAccountInfo.js";
import type ContactInfo from "./ContactInfo.js";
import type CostCenterInfo from "./CostCenterInfo.js";
import type CustomFieldInfo from "./CustomFieldInfo.js";
import type DepartmentInfo from "./DepartmentInfo.js";
import type ExtensionPermissions from "./ExtensionPermissions.js";
import type ProfileImageInfo from "./ProfileImageInfo.js";
import type ReferenceInfo from "./ReferenceInfo.js";
import type Roles from "./Roles.js";
import type RegionalSettings from "./RegionalSettings.js";
import type ExtensionServiceFeatureInfo from "./ExtensionServiceFeatureInfo.js";
import type ExtensionStatusInfo from "./ExtensionStatusInfo.js";
import type CallQueueExtensionInfo from "./CallQueueExtensionInfo.js";
import type ProvisioningSiteInfo from "./ProvisioningSiteInfo.js";
import type AssignedCountryInfo from "./AssignedCountryInfo.js";

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

  /**
   */
  account?: GetExtensionAccountInfo;

  /**
   */
  contact?: ContactInfo;

  /**
   */
  costCenter?: CostCenterInfo;

  /**
   */
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

  /**
   */
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

  /**
   */
  permissions?: ExtensionPermissions;

  /**
   */
  profileImage?: ProfileImageInfo;

  /**
   * List of non-RC internal identifiers assigned to an extension
   */
  references?: ReferenceInfo[];

  /**
   */
  roles?: Roles[];

  /**
   */
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

  /**
   */
  statusInfo?: ExtensionStatusInfo;

  /**
   * Type of the extension. For unrecognized types the `Unknown` value is returned.
   *  Please note that legacy 'Department' extension type corresponds to 'Call Queue'
   *  extensions in modern RingCentral product terminology
   * Example: User
   */
  type?:
    | "User"
    | "Department"
    | "Announcement"
    | "Voicemail"
    | "DigitalUser"
    | "VirtualUser"
    | "FaxUser"
    | "PagingOnly"
    | "SharedLinesGroup"
    | "DelegatedLinesGroup"
    | "GroupCallPickup"
    | "IvrMenu"
    | "ApplicationExtension"
    | "ProxyAdmin"
    | "RoomConnector"
    | "ParkLocation"
    | "Limited"
    | "Bot"
    | "Site"
    | "Room"
    | "FlexibleUser"
    | "TieLine"
    | "Unknown";

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
   */
  callQueueInfo?: CallQueueExtensionInfo;

  /**
   * Hides extension from showing in company directory. Supported for
   *  extensions of User type only
   */
  hidden?: boolean;

  /**
   */
  site?: ProvisioningSiteInfo;

  /**
   */
  assignedCountry?: AssignedCountryInfo;

  /**
   * Extension creation date/time, in ISO 8601 format
   * Format: date-time
   * Example: Thu Jun 06 2024 00:01:14 GMT-0700 (Pacific Daylight Time)
   */
  creationTime?: string;

  /**
   * Site access status for cross-site limitation
   */
  siteAccess?: "Limited" | "Unlimited";

  /**
   * Alert timer or pickup setting. Delay time in seconds before call queue group members are notified when calls are queued
   * Format: int32
   */
  alertTimer?: number;
}

export default GetExtensionInfoResponse;
