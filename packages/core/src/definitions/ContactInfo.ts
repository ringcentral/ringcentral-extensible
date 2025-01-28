import ContactBusinessAddressInfo from "./ContactBusinessAddressInfo";
import PronouncedNameInfo from "./PronouncedNameInfo";

/**
 * Detailed contact information
 */
interface ContactInfo {
  /**
   * User's first name (for extensions of `User` type only)
   */
  firstName?: string;

  /**
   * For User extension type only. User's last name (for extensions of `User` type only)
   */
  lastName?: string;

  /**
   * Extension name (for extensions of `User` type - concatenation of first and last name)
   */
  name?: string;

  /**
   * User's company name
   */
  company?: string;

  /**
   * User's job title
   */
  jobTitle?: string;

  /**
   * User's contact email
   * Format: email
   */
  email?: string;

  /**
   * User's contact phone number in [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I)
   *  (with '+' sign) format
   */
  businessPhone?: string;

  /**
   * User's mobile (**non** Toll Free) phone number in [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I)
   *  (with '+' sign) format
   */
  mobilePhone?: string;

  /** */
  businessAddress?: ContactBusinessAddressInfo;

  /**
   * Indicates that the contact email is enabled as a login name for this
   *  user. Please note that the email must be unique in this case.
   */
  emailAsLoginName?: boolean;

  /** */
  pronouncedName?: PronouncedNameInfo;

  /**
   * User's department name
   */
  department?: string;
}

export default ContactInfo;
