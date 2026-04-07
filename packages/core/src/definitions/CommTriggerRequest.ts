interface CommTriggerRequest {
  /**
   * Trigger type
   * Required
   */
  triggerType?: "Daily" | "Weekly" | "Range";
}

export default CommTriggerRequest;
