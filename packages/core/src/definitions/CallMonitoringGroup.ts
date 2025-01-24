import type CallMonitoringGroupSite from "./CallMonitoringGroupSite";

interface CallMonitoringGroup {
  /**
   * Link to a call monitoring group resource
   * Format: uri
   */
  uri?: string;

  /**
   * Internal identifier of a group
   */
  id?: string;

  /**
   * Name of a group
   */
  name?: string;

  /** */
  site?: CallMonitoringGroupSite;
}

export default CallMonitoringGroup;
