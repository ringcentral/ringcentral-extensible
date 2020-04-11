class ExtensionInfoEventBody
{
  /**
   * Internal identifier of an extension
   */
  extensionId?: string

  /**
   * Type of extension info change
   */
  eventType?: ('Update' | 'Delete')

  /**
   * Returned for 'Update' event type only. The possible values are: /nAccountInfo - change of account parameters/nExtensionInfo - change of contact info, service features, departments, status/nPhoneNumber - change of phone numbers/nRole - change of permissions/nProfileImage - change of profile image
   */
  hints?: string[]

  /**
   * Internal identifier of a subscription owner extension
   */
  ownerId?: string
}

export default ExtensionInfoEventBody
