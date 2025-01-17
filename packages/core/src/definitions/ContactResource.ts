import type AccountResource from './AccountResource';
import type PhoneNumberResource from './PhoneNumberResource';
import type AccountDirectoryProfileImageResource from './AccountDirectoryProfileImageResource';
import type BusinessSiteResource from './BusinessSiteResource';
import type CustomFieldResource from './CustomFieldResource';
import type ExternalIntegrationResource from './ExternalIntegrationResource';

interface ContactResource {
  /**
   * Contact extension identifier
   * Required
   * Example: 865706371004
   */
  id?: string;

  /**
   * Contact type
   * Example: User
   */
  type?:
    | 'User'
    | 'Department'
    | 'Announcement'
    | 'Voicemail'
    | 'SharedLinesGroup'
    | 'PagingOnly'
    | 'ParkLocation'
    | 'IvrMenu'
    | 'Limited'
    | 'ApplicationExtension'
    | 'Site'
    | 'Bot'
    | 'Room'
    | 'ProxyAdmin'
    | 'DelegatedLinesGroup'
    | 'GroupCallPickup'
    | 'External'
    | 'RoomConnector'
    | 'Unknown';

  /**
   * Contact status
   * Example: Enabled
   */
  status?: 'Enabled' | 'Disabled' | 'Frozen' | 'NotActivated' | 'Unassigned' | 'Unknown';

  /**
   */
  account?: AccountResource;

  /**
   * Example: External
   */
  department?: string;

  /**
   * Format: email
   * Example: john.doe@mycompany.com
   */
  email?: string;

  /**
   * Example: 103
   */
  extensionNumber?: string;

  /**
   * First name of a contact, for user extensions only
   * Example: John
   */
  firstName?: string;

  /**
   * Last name of a contact, for user extensions only
   * Example: Doe
   */
  lastName?: string;

  /**
   * Name of a contact, for non-user extensions
   * Example: Conference room ?5
   */
  name?: string;

  /**
   * Example: Sales manager
   */
  jobTitle?: string;

  /**
   */
  phoneNumbers?: PhoneNumberResource[];

  /**
   */
  profileImage?: AccountDirectoryProfileImageResource;

  /**
   */
  site?: BusinessSiteResource;

  /**
   */
  hidden?: boolean;

  /**
   */
  customFields?: CustomFieldResource[];

  /**
   */
  integration?: ExternalIntegrationResource;
}

export default ContactResource;
