import MeetingResponseResource from './MeetingResponseResource';
import MeetingsPagingInfo from './MeetingsPagingInfo';
import MeetingsNavigationInfo from './MeetingsNavigationInfo';

interface MeetingsResource {
  /**
   * Format: uri
   */
  uri?: string;

  /**
   */
  records?: MeetingResponseResource[];

  /**
   */
  paging?: MeetingsPagingInfo;

  /**
   */
  navigation?: MeetingsNavigationInfo;
}

export default MeetingsResource;
