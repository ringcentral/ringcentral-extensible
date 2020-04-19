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
   * Returned for 'Update' event type only
   */
  hints?: ('LimitsFeatures' | 'AccountSettings' | 'CompanyNumbers' | 'AccountStatus' | 'DialingPlan' | 'Permissions' | 'ProfileImage' | 'ExtensionInfo' | 'VideoConfiguration')[]

  /**
   * Internal identifier of a subscription owner extension
   */
  ownerId?: string
}

export default ExtensionInfoEventBody
