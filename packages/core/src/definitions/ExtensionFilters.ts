/**
 * Specifies filtering based on extension ids
 */
interface ExtensionFilters {
  /**
   * List of extension ids to match against incoming calls, joined via OR condition. Only applicable for `groupByMembers` options and Users, IVRs, SharedLines and Queues in `groupBy`
   */
  fromIds?: string[];

  /**
   * List of extension ids to match against outgoing calls, joined via OR condition. Limited to the extension id that first accepted the call. Only applicable for `groupByMembers` options and Users, IVRs and SharedLines in `groupBy`
   */
  toIds?: string[];
}

export default ExtensionFilters;
