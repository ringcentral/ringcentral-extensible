import {
  CompanyDirectoryAccountInfo,
  CompanyDirectoryPhoneNumberInfo,
  ContactDirectorySiteInfo,
  CompanyDirectoryProfileImageInfo,
} from './index';

class CompanyDirectoryEventBody {
  /**
   * Internal identifier of an extension
   */
  id?: string;

  /**
   * Type of change
   */
  eventType?: string;

  /**
   * Type of extension
   */
  type?: string;

  /**
   * Status of an extension
   */
  status?: 'Enabled' | 'NotActivated' | 'Disabled';

  /**
   * First name of a user extension
   */
  firstName?: string;

  /**
   * Last name of a user extension
   */
  lastName?: string;

  /**
   * Name of a contact, for non-user extensions
   */
  name?: string;

  /**
   * Department name
   */
  department?: string;

  /**
   */
  email?: string;

  /**
   */
  extensionNumber?: string;

  /**
   */
  account?: CompanyDirectoryAccountInfo;

  /**
   */
  phoneNumbers?: CompanyDirectoryPhoneNumberInfo[];

  /**
   * Site data
   */
  site?: ContactDirectorySiteInfo;

  /**
   * Extension profile image information. Not returned if profile images are absent for an extension
   */
  profileImage?: CompanyDirectoryProfileImageInfo;
}

export default CompanyDirectoryEventBody;
