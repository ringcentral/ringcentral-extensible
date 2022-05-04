import { MeetingResponseResource, MeetingsPagingInfo, MeetingsNavigationInfo } from './index';

class MeetingsResource {
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
