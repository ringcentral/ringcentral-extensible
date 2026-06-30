interface QueueInfoPositionInQueue {
  /**
   * Controls when position-in-queue announcement is played.
   *  `OnPositionChange` - only if the caller's position changed since the last announcement.
   * Default: EveryInterval
   */
  playbackFrequency?: "EveryInterval" | "OnPositionChange";
}

export default QueueInfoPositionInQueue;
