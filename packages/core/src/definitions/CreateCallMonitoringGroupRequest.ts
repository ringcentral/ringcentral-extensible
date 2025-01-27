import CreateCallMonitoringGroupRequestSite from "./CreateCallMonitoringGroupRequestSite.js";

interface CreateCallMonitoringGroupRequest {
  /**
   * Name of a group
   * Required
   */
  name?: string;

  /** */
  site?: CreateCallMonitoringGroupRequestSite;
}

export default CreateCallMonitoringGroupRequest;
