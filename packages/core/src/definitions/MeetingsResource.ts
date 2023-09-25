import type MeetingResponseResource from './MeetingResponseResource';
import type MeetingsPagingInfo from './MeetingsPagingInfo';
import type MeetingsNavigationInfo from './MeetingsNavigationInfo';

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
