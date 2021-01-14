import {
  ContactInfo,
  CustomFieldInfo,
  ExtensionPermissions,
  ProfileImageInfo,
  ReferenceInfo,
  RegionalSettings,
  ExtensionServiceFeatureInfo,
  AutomaticLocationUpdatesSiteInfo,
  ExtensionStatusInfo,
} from './index';

class ExtensionCreationResponse {
  /**
   * Internal identifier of an extension
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
   */
  customFields?: CustomFieldInfo[];

  /**
   * Number of department extension
   */
  extensionNumber?: string;

  /**
   * Extension name. For user extension types the value is a combination of the specified first name and last name
   */
  name?: string;

  /**
   * For Partner Applications Internal identifier of an extension created by partner. The RingCentral supports the mapping of accounts and stores the corresponding account ID/extension ID for each partner ID of a client application. In request URIs partner IDs are accepted instead of regular RingCentral native IDs as path parameters using pid = XXX clause. Though in response URIs contain the corresponding account IDs and extension IDs. In all request and response bodies these values are reflected via partnerId attributes of account and extension
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
  regionalSettings?: RegionalSettings;

  /**
   * Extension service features returned in response only when the logged-in user requests his/her own extension info, see also Extension Service Features
   */
  serviceFeatures?: ExtensionServiceFeatureInfo[];

  /**
   * Specifies extension configuration wizard state (web service setup). The default value is 'NotStarted'
   */
  setupWizardState?: 'NotStarted' | 'Incomplete' | 'Completed';

  /**
   */
  site?: AutomaticLocationUpdatesSiteInfo;

  /**
   * Extension current state. If 'Unassigned' is specified, then extensions without ‘extensionNumber’ are returned. If not specified, then all extensions are returned
   */
  status?: 'Enabled' | 'Disabled' | 'Frozen' | 'NotActivated' | 'Unassigned';

  /**
   */
  statusInfo?: ExtensionStatusInfo;

  /**
   * Extension type
   */
  type?:
    | 'User'
    | 'VirtualUser'
    | 'DigitalUser'
    | 'Department'
    | 'Announcement'
    | 'Voicemail'
    | 'SharedLinesGroup'
    | 'PagingOnly'
    | 'ParkLocation'
    | 'Limited';

  /**
   * Hides extension from showing in company directory. Supported for extensions of User type only
   */
  hidden?: boolean;
}

export default ExtensionCreationResponse;
