import type CreateCallMonitoringGroupRequestSite from './CreateCallMonitoringGroupRequestSite';

interface CreateCallMonitoringGroupRequest {
  /**
   * Name of a group
   * Required
   */
  name?: string;

  /**
   */
  site?: CreateCallMonitoringGroupRequestSite;
}

export default CreateCallMonitoringGroupRequest;
