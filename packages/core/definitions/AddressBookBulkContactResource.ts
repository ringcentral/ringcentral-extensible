import {AddressBookBulkContactAddressInfo} from './index';

// Contact resource
class AddressBookBulkContactResource {
  /**
   * Email of a contact
   */
  email?: string;

  /**
   * Notes for a contact
   */
  notes?: string;

  /**
   * Company name of a contact
   */
  company?: string;

  /**
   * First name of a contact
   */
  firstName?: string;

  /**
   * Last name of a contact
   */
  lastName?: string;

  /**
   * Job title of a contact
   */
  jobTitle?: string;

  /**
   * Date of birth of a contact
   */
  birthday?: string;

  /**
   * Link to a contact home page
   */
  webPage?: string;

  /**
   * Middle name of a contact
   */
  middleName?: string;

  /**
   * Nick name of a contact
   */
  nickName?: string;

  /**
   * Second email of a contact
   */
  email2?: string;

  /**
   * Third email of a contact
   */
  email3?: string;

  /**
   * Home phone number of a contact in e.164 (with "+") format
   */
  homePhone?: string;

  /**
   * 2nd home phone number of a contact in e.164 (with "+") format
   */
  homePhone2?: string;

  /**
   * Business phone of a contact in e.164 (with "+") format
   */
  businessPhone?: string;

  /**
   * 2nd business phone of a contact in e.164 (with "+") format
   */
  businessPhone2?: string;

  /**
   * Mobile phone of a contact in e.164 (with "+") format
   */
  mobilePhone?: string;

  /**
   * Business fax number of a contact in e.164 (with "+") format
   */
  businessFax?: string;

  /**
   * Company number of a contact in e.164 (with "+") format
   */
  companyPhone?: string;

  /**
   * Phone number of a contact assistant in e.164 (with "+") format
   */
  assistantPhone?: string;

  /**
   * Car phone number of a contact in e.164 (with "+") format
   */
  carPhone?: string;

  /**
   * Other phone number of a contact in e.164 (with "+") format
   */
  otherPhone?: string;

  /**
   * Other fax number of a contact in e.164 (with "+") format
   */
  otherFax?: string;

  /**
   * Callback phone number of a contact in e.164 (with "+") format
   */
  callbackPhone?: string;

  /**
   */
  businessAddress?: AddressBookBulkContactAddressInfo;

  /**
   */
  homeAddress?: AddressBookBulkContactAddressInfo;

  /**
   */
  otherAddress?: AddressBookBulkContactAddressInfo;
}

export default AddressBookBulkContactResource;
