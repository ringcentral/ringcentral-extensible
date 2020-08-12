import {
  MeetingResponseResource,
  MeetingsPagingInfo,
  MeetingsNavigationInfo,
} from './index';

class MeetingsResource {
  /**
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
