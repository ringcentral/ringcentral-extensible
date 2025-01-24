interface ScheduleMeetingResponse {
  /** */
  startHostVideo?: boolean;

  /** */
  startParticipantVideo?: boolean;

  /** */
  audioOptions?: boolean;

  /** */
  allowJoinBeforeHost?: boolean;

  /** */
  requirePasswordForSchedulingNewMeetings?: boolean;

  /** */
  requirePasswordForInstantMeetings?: boolean;

  /** */
  requirePasswordForPmiMeetings?: boolean;

  /** */
  enforceLogin?: boolean;
}

export default ScheduleMeetingResponse;
