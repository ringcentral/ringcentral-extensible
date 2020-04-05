import ActiveCallInfoWithoutSIP from './ActiveCallInfoWithoutSIP'

class DetailedExtensionPresenceEventBody
{
  /**
   * Internal identifier of an extension
   * Default: ~
   */
  extensionId?: string

  /**
   * Telephony presence status. Returned if telephony status is changed.
   * Enum: NoCall, CallConnected, Ringing, OnHold, ParkedCall
   */
  telephonyStatus?: string

  /**
   * List of the latest 7 active calls on extension
   */
  activeCalls?: ActiveCallInfoWithoutSIP[]

  /**
   * Order number of a notification to state the chronology
   */
  sequence?: number

  /**
   * Aggregated presence status, calculated from a number of sources
   * Enum: Offline, Busy, Available
   */
  presenceStatus?: string

  /**
   * User-defined presence status (as previously published by the user)
   * Enum: Offline, Busy, Available
   */
  userStatus?: string

  /**
   * Meetings presence status
   * Enum: Connected, Disconnected
   */
  meetingStatus?: string

  /**
   * Extended DnD (Do not Disturb) status
   * Enum: TakeAllCalls, DoNotAcceptAnyCalls, DoNotAcceptDepartmentCalls, TakeDepartmentCallsOnly
   */
  dndStatus?: string

  /**
   * If 'True' enables other extensions to see the extension presence status
   */
  allowSeeMyPresence?: boolean

  /**
   * If 'True' enables to ring extension phone, if any user monitored by this extension is ringing
   */
  ringOnMonitoredCall?: boolean

  /**
   * If 'True' enables the extension user to pick up a monitored line on hold
   */
  pickUpCallsOnHold?: boolean

  /**
   * Total number of active calls on extension at the present moment
   */
  totalActiveCalls?: number

  /**
   * Internal identifier of a subscription owner extension
   */
  ownerId?: string
}

export default DetailedExtensionPresenceEventBody
