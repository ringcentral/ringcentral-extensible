class PhoneNumberResource
{
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
     * Enum: MobileNumber, ContactNumber, DirectNumber, ForwardedNumber
     */
    usageType?: string
}

export default PhoneNumberResource