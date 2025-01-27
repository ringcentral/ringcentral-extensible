import CallMonitoringExtensionInfo from "./CallMonitoringExtensionInfo.js";

interface CallMonitoringBulkAssign {
  /** */
  addedExtensions?: CallMonitoringExtensionInfo[];

  /** */
  updatedExtensions?: CallMonitoringExtensionInfo[];

  /** */
  removedExtensions?: CallMonitoringExtensionInfo[];
}

export default CallMonitoringBulkAssign;
