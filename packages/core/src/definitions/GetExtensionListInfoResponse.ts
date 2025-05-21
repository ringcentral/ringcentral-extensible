import ContactInfo from "./ContactInfo.js";
import ExtensionPermissions from "./ExtensionPermissions.js";
import ProfileImageInfo from "./ProfileImageInfo.js";
import CallQueueExtensionInfo from "./CallQueueExtensionInfo.js";
import ProvisioningSiteInfo from "./ProvisioningSiteInfo.js";
import AssignedCountryInfo from "./AssignedCountryInfo.js";
import CostCenterInfo from "./CostCenterInfo.js";

interface GetExtensionListInfoResponse {
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

  /**
   * Extension short number
   */
  extensionNumber?: string;

  /**
   * Extension name. For user extension types the value is a combination
   *  of the specified first name and last name
   */
  name?: string;

  /** */
  permissions?: ExtensionPermissions;

  /** */
  profileImage?: ProfileImageInfo;

  /**
   * Extension status
   */
  status?: "Enabled" | "Disabled" | "Frozen" | "NotActivated" | "Unassigned";

  /**
   * Type of the extension.
   *  For unrecognized types the `Unknown` value is returned
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
    | "Unknown";

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

  /** */
  callQueueInfo?: CallQueueExtensionInfo;

  /**
   * Hides extension from showing in company directory.
   *  Supported for extensions of User type only
   */
  hidden?: boolean;

  /** */
  site?: ProvisioningSiteInfo;

  /** */
  assignedCountry?: AssignedCountryInfo;

  /** */
  costCenter?: CostCenterInfo;

  /**
   * Extension creation date/time, in ISO 8601 format
   * Format: date-time
   * Example: Thu Jun 06 2024 00:01:14 GMT-0700 (Pacific Daylight Time)
   */
  creationTime?: string;
}

export default GetExtensionListInfoResponse;
