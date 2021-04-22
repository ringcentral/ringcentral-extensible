import {
  ExtensionContactInfo,
  Reference,
  StatusInfo,
  DeviceDepartmentResource,
  ServiceFeatureValue,
  RegionalSettingsInfo,
  ExtensionPermissionsResource,
  ProfileImageResource,
} from './index';

// Information on an extension to which the phone number is assigned
class PhoneNumberExtensionInfo {
  /**
   */
  uri?: string;

  /**
   */
  id?: string;

  /**
   */
  partnerId?: string;

  /**
   */
  extensionNumber?: string;

  /**
   */
  loginName?: string;

  /**
   */
  contact?: ExtensionContactInfo;

  /**
   */
  references?: Reference[];

  /**
   */
  name?: string;

  /**
   * Extension type. Please note that legacy 'Department' extension type corresponds to 'Call Queue' extensions in modern RingCentral product terminology
   */
  type?:
    | 'Unknown'
    | 'User'
    | 'Department'
    | 'Announcement'
    | 'Voicemail'
    | 'DigitalUser'
    | 'VirtualUser'
    | 'FaxUser'
    | 'PagingOnly'
    | 'SharedLinesGroup'
    | 'IvrMenu'
    | 'ApplicationExtension'
    | 'ParkLocation';

  /**
   */
  status?: 'Enabled' | 'Disabled' | 'Frozen' | 'NotActivated' | 'Unassigned';

  /**
   */
  statusInfo?: StatusInfo;

  /**
   */
  departments?: DeviceDepartmentResource[];

  /**
   */
  serviceFeatures?: ServiceFeatureValue[];

  /**
   */
  regionalSettings?: RegionalSettingsInfo;

  /**
   */
  setupWizardState?: 'NotStarted' | 'Incomplete' | 'Completed' | 'Unknown';

  /**
   */
  permissions?: ExtensionPermissionsResource;

  /**
   */
  password?: string;

  /**
   */
  ivrPin?: string;

  /**
   */
  profileImage?: ProfileImageResource;
}

export default PhoneNumberExtensionInfo;
