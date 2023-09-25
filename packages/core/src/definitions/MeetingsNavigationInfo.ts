import type MeetingsNavigationInfoUri from './MeetingsNavigationInfoUri';

interface MeetingsNavigationInfo {
  /**
   */
  nextPage?: MeetingsNavigationInfoUri;

  /**
   */
  previousPage?: MeetingsNavigationInfoUri;

  /**
   */
  firstPage?: MeetingsNavigationInfoUri;

  /**
   */
  lastPage?: MeetingsNavigationInfoUri;
}

export default MeetingsNavigationInfo;
