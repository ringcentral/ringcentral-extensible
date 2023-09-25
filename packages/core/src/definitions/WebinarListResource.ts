import type WcsWebinarResource from './WcsWebinarResource';
import type RcwPagingModel from './RcwPagingModel';

interface WebinarListResource {
  /**
   * Required
   */
  records?: WcsWebinarResource[];

  /**
   * Required
   */
  paging?: RcwPagingModel;
}

export default WebinarListResource;
