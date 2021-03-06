import {
  CompanyDirectoryAccountInfo,
  CompanyDirectoryPhoneNumberInfo,
  ContactDirectorySiteInfo,
  CompanyDirectoryProfileImageInfo,
} from './index';

class ContactDirectoryEvent {
  /**
   * Internal identifier of an extension
   */
  id?: string;

  /**
   * Type of change
   */
  eventType?: string;

  /**
   * Extension Type
   */
  type?: string;

  /**
   * Status of an extension
   */
  status?: 'Disabled' | 'Enabled' | 'NotActivated';

  /**
   * First name of an extension user
   */
  firstName?: string;

  /**
   * Last name of an extension user
   */
  lastName?: string;

  /**
   * Department Name
   */
  department?: string;

  /**
   * Email of an extension user
   */
  email?: string;

  /**
   * Extension number
   */
  extensionNumber?: string;

  /**
   */
  account?: CompanyDirectoryAccountInfo;

  /**
   */
  phoneNumbers?: CompanyDirectoryPhoneNumberInfo;

  /**
   */
  site?: ContactDirectorySiteInfo;

  /**
   */
  profileImage?: CompanyDirectoryProfileImageInfo;

  /**
   * Internal identifier of a subscription owner extension
   */
  ownerId?: string;
}
export default ContactDirectoryEvent;
