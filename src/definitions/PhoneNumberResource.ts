class PhoneNumberResource {
  /**
   */
  formattedPhoneNumber?: string

  /**
   */
  phoneNumber?: string

  /**
   */
  type?: string

  /**
   * Custom user name of a phone number, if any
   */
  label?: string

  /**
   * Usage type of a phone number
   */
  usageType?: ('MobileNumber' | 'ContactNumber' | 'DirectNumber' | 'ForwardedNumber')
}

export default PhoneNumberResource
