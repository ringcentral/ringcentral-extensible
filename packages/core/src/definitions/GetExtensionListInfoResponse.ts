import ContactInfo from "./ContactInfo.js";
import ExtensionPermissions from "./ExtensionPermissions.js";
import ProfileImageInfo from "./ProfileImageInfo.js";
import ReferenceInfo from "./ReferenceInfo.js";
import CallQueueExtensionInfo from "./CallQueueExtensionInfo.js";
import Roles from "./Roles.js";
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

  /**
   */
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

  /**
   */
  permissions?: ExtensionPermissions;

  /**
   */
  profileImage?: ProfileImageInfo;

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
   * List of non-RC internal identifiers assigned to an extension
   */
  references?: ReferenceInfo[];

  /**
   * Extension status
   */
  status?: ('Enabled' | 'Disabled' | 'Frozen' | 'NotActivated' | 'Unassigned');

  /**
   * Type of the extension. For unrecognized types the `Unknown` value is returned.
 *  Please note that legacy 'Department' extension type corresponds to 'Call Queue'
 *  extensions in modern RingCentral product terminology
   * Example: User
   */
  type?: ('User' | 'Department' | 'Announcement' | 'Voicemail' | 'DigitalUser' | 'VirtualUser' | 'FaxUser' | 'PagingOnly' | 'SharedLinesGroup' | 'DelegatedLinesGroup' | 'GroupCallPickup' | 'IvrMenu' | 'ApplicationExtension' | 'ProxyAdmin' | 'RoomConnector' | 'ParkLocation' | 'Limited' | 'Bot' | 'Site' | 'Room' | 'FlexibleUser' | 'TieLine' | 'Unknown');

  /**
   * Extension subtype, if applicable.
 *  For unrecognized subtypes the `Unknown` value is returned
   */
  subType?: ('VideoPro' | 'VideoProPlus' | 'DigitalSignageOnlyRooms' | 'Unknown' | 'Emergency');

  /**
   */
  callQueueInfo?: CallQueueExtensionInfo;

  /**
   * Hides extension from showing in company directory.
 *  Supported for extensions of User type only
   */
  hidden?: boolean;

  /**
   */
  roles?: Roles[];

  /**
   */
  site?: ProvisioningSiteInfo;

  /**
   */
  assignedCountry?: AssignedCountryInfo;

  /**
   */
  costCenter?: CostCenterInfo;

  /**
   * Extension creation date/time, in ISO 8601 format
   * Format: date-time
   * Example: Thu Jun 06 2024 00:01:14 GMT-0700 (Pacific Daylight Time)
   */
  creationTime?: string;

  /**
   * Alert timer or pickup setting. Delay time in seconds before call queue group members are notified when calls are queued
   * Format: int32
   */
  alertTimer?: number;
}

export default GetExtensionListInfoResponse;
