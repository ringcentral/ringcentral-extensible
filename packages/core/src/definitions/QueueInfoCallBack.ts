interface QueueInfoCallBack {
  /**
   * Additional announcements appended to the base callback confirmation.
   *  Empty array means no additional announcements.
   * Default:
   */
  confirmationAnnouncements?: ("PositionInQueue" | "EstimatedWaitTime")[];
}

export default QueueInfoCallBack;
