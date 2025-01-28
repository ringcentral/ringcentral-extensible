import CallMonitoringExtensionInfo from "./CallMonitoringExtensionInfo";

interface CallMonitoringBulkAssign {
  /** */
  addedExtensions?: CallMonitoringExtensionInfo[];

  /** */
  updatedExtensions?: CallMonitoringExtensionInfo[];

  /** */
  removedExtensions?: CallMonitoringExtensionInfo[];
}

export default CallMonitoringBulkAssign;
