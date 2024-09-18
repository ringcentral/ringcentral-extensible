import type ContactInfo from './ContactInfo';
import type ExtensionPermissions from './ExtensionPermissions';
import type ProfileImageInfo from './ProfileImageInfo';
import type CallQueueExtensionInfo from './CallQueueExtensionInfo';
import type ProvisioningSiteInfo from './ProvisioningSiteInfo';
import type AssignedCountryInfo from './AssignedCountryInfo';
import type CostCenterInfo from './CostCenterInfo';

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
   * Extension status
   */
  status?: 'Enabled' | 'Disabled' | 'Frozen' | 'NotActivated' | 'Unassigned';

  /**
   * Extension type. Please note that legacy `Department` extension type
   *  corresponds to 'Call Queue' extensions in modern RingCentral product
   *  terminology
   */
  type?:
    | 'User'
    | 'FaxUser'
    | 'FlexibleUser'
    | 'VirtualUser'
    | 'DigitalUser'
    | 'Department'
    | 'Announcement'
    | 'Voicemail'
    | 'SharedLinesGroup'
    | 'PagingOnly'
    | 'IvrMenu'
    | 'ApplicationExtension'
    | 'ParkLocation'
    | 'Bot'
    | 'Room'
    | 'Limited'
    | 'Site'
    | 'ProxyAdmin'
    | 'DelegatedLinesGroup'
    | 'GroupCallPickup';

  /**
   * Extension subtype, if applicable. For any unsupported subtypes the
   *  `Unknown` value will be returned
   */
  subType?: 'VideoPro' | 'VideoProPlus' | 'DigitalSignage' | 'Unknown' | 'Emergency';

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
   * Example: 2024-06-06T07:01:14.123Z
   */
  creationTime?: string;
}

export default GetExtensionListInfoResponse;
