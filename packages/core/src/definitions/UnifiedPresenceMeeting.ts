/**
 * Returned if *Meetings* feature is switched on
*/
interface UnifiedPresenceMeeting {
  /**
   * Meeting status calculated from all user`s meetings
   */
  status?: ('NoMeeting' | 'InMeeting');
}

export default UnifiedPresenceMeeting;
