import { ContactAddressInfo } from '.'

class PersonalContactRequest {
  /**
   * First name of the contact
   */
  firstName?: string

  /**
   * Last name of the contact
   */
  lastName?: string

  /**
   * Middle name of the contact
   */
  middleName?: string

  /**
   * Nick name of the contact
   */
  nickName?: string

  /**
   * Company name of the contact
   */
  company?: string

  /**
   * Job title of the contact
   */
  jobTitle?: string

  /**
   * Email of the contact
   */
  email?: string

  /**
   * 2nd email of the contact
   */
  email2?: string

  /**
   * 3rd email of the contact
   */
  email3?: string

  /**
   * Date of birth of the contact
   */
  birthday?: string

  /**
   * The contact home page URL
   */
  webPage?: string

  /**
   * Notes for the contact
   */
  notes?: string

  /**
   * Home phone number of the contact in e.164 (with "+") format
   */
  homePhone?: string

  /**
   * 2nd home phone number of the contact in e.164 (with "+") format
   */
  homePhone2?: string

  /**
   * Business phone of the contact in e.164 (with "+") format
   */
  businessPhone?: string

  /**
   * 2nd business phone of the contact in e.164 (with "+") format
   */
  businessPhone2?: string

  /**
   * Mobile phone of the contact in e.164 (with "+") format
   */
  mobilePhone?: string

  /**
   * Business fax number of the contact in e.164 (with "+") format
   */
  businessFax?: string

  /**
   * Company number of the contact in e.164 (with "+") format
   */
  companyPhone?: string

  /**
   * Phone number of the contact assistant in e.164 (with "+") format
   */
  assistantPhone?: string

  /**
   * Car phone number of the contact in e.164 (with "+") format
   */
  carPhone?: string

  /**
   * Other phone number of the contact in e.164 (with "+") format
   */
  otherPhone?: string

  /**
   * Other fax number of the contact in e.164 (with "+") format
   */
  otherFax?: string

  /**
   * Callback phone number of the contact in e.164 (with "+") format
   */
  callbackPhone?: string

  /**
   */
  homeAddress?: ContactAddressInfo

  /**
   */
  businessAddress?: ContactAddressInfo

  /**
   */
  otherAddress?: ContactAddressInfo
}

export default PersonalContactRequest
