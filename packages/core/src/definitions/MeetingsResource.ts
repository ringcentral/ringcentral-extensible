import type MeetingResponseResource from './MeetingResponseResource';
import type EnumeratedPagingModel from './EnumeratedPagingModel';
import type PageNavigationModel from './PageNavigationModel';

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
  paging?: EnumeratedPagingModel;

  /**
   */
  navigation?: PageNavigationModel;
}

export default MeetingsResource;
