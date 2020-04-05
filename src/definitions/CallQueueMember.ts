import SiteResource from './SiteResource'

class CallQueueMember
{
  /**
   * Internal identifier of an extension
   */
  id?: string

  /**
   * Extension full name
   */
  name?: string

  /**
   * Extension number
   */
  extensionNumber?: string

  /**
   * Extension site
   */
  site?: SiteResource
}

export default CallQueueMember
