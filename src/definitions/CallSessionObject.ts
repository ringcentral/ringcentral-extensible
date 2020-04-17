import { OriginInfo, CallParty } from '.'

class CallSessionObject
{
  /**
   * Internal identifier of a call session
   */
  id?: string

  /**
   * Initial data of a call session
   */
  origin?: OriginInfo

  /**
   * For calls of 'Conference' type only
   */
  voiceCallToken?: string

  /**
   */
  parties?: CallParty[]

  /**
   * Date and time of the latest session update represented in Unix time format
   */
  creationTime?: string
}

export default CallSessionObject
