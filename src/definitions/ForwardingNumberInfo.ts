import CreateForwardingNumberDeviceInfo from './CreateForwardingNumberDeviceInfo'

class ForwardingNumberInfo
{
  /**
   * Internal identifier of a forwarding/call flip phone number
   */
  id?: string

  /**
   * Canonical URI of a forwarding/call flip phone number
   */
  uri?: string

  /**
   * Forwarding/Call flip phone number
   */
  phoneNumber?: string

  /**
   * Forwarding/Call flip number title
   */
  label?: string

  /**
   * Type of option this phone number is used for. Multiple values are accepted
   */
  features?: string[]

  /**
   * Number assigned to the call flip phone number, corresponds to the shortcut dial number
   */
  flipNumber?: string

  /**
   * Forwarding device information
   */
  device?: CreateForwardingNumberDeviceInfo

  /**
   * Forwarding phone number type
   * Enum: Home, Mobile, Work, PhoneLine, Outage, Other
   */
  type?: string
}

export default ForwardingNumberInfo
