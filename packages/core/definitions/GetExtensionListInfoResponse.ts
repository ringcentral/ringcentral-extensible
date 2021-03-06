import {
  ContactInfo,
  ExtensionPermissions,
  ProfileImageInfo,
  CallQueueExtensionInfo,
  AutomaticLocationUpdatesSiteInfo,
} from './index';

class GetExtensionListInfoResponse {
  /**
   * Internal identifier of an extension
   * Format: int64
   */
  id?: number;

  /**
   * Canonical URI of an extension
   */
  uri?: string;

  /**
   */
  contact?: ContactInfo;

  /**
   * Number of an extension
   */
  extensionNumber?: string;

  /**
   * Extension name. For user extension types the value is a combination of the specified first name and last name
   */
  name?: string;

  /**
   */
  permissions?: ExtensionPermissions;

  /**
   */
  profileImage?: ProfileImageInfo;

  /**
   * Extension current state. If 'Unassigned' is specified, then extensions without ‘extensionNumber’ are returned. If not specified, then all extensions are returned
   */
  status?: 'Enabled' | 'Disabled' | 'Frozen' | 'NotActivated' | 'Unassigned';

  /**
   * Extension type. Please note that legacy 'Department' extension type corresponds to 'Call Queue' extensions in modern RingCentral product terminology
   */
  type?:
    | 'User'
    | 'FaxUser'
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
   */
  callQueueInfo?: CallQueueExtensionInfo;

  /**
   * Hides extension from showing in company directory. Supported for extensions of User type only
   */
  hidden?: boolean;

  /**
   */
  site?: AutomaticLocationUpdatesSiteInfo;
}
export default GetExtensionListInfoResponse;
