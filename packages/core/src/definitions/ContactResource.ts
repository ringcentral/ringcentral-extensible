import AccountResource from "./AccountResource.js";
import PhoneNumberResource from "./PhoneNumberResource.js";
import AccountDirectoryProfileImageResource from "./AccountDirectoryProfileImageResource.js";
import BusinessSiteResource from "./BusinessSiteResource.js";
import CustomFieldResource from "./CustomFieldResource.js";
import ExternalIntegrationResource from "./ExternalIntegrationResource.js";

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
    | "User"
    | "Department"
    | "Announcement"
    | "Voicemail"
    | "SharedLinesGroup"
    | "PagingOnly"
    | "ParkLocation"
    | "IvrMenu"
    | "Limited"
    | "ApplicationExtension"
    | "Site"
    | "Bot"
    | "Room"
    | "ProxyAdmin"
    | "DelegatedLinesGroup"
    | "GroupCallPickup"
    | "External"
    | "RoomConnector"
    | "Unknown";

  /**
   * Contact status
   * Example: Enabled
   */
  status?:
    | "Enabled"
    | "Disabled"
    | "Frozen"
    | "NotActivated"
    | "Unassigned"
    | "Unknown";

  /** */
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

  /** */
  phoneNumbers?: PhoneNumberResource[];

  /** */
  profileImage?: AccountDirectoryProfileImageResource;

  /** */
  site?: BusinessSiteResource;

  /** */
  hidden?: boolean;

  /** */
  customFields?: CustomFieldResource[];

  /** */
  integration?: ExternalIntegrationResource;
}

export default ContactResource;
