import WcsWebinarResource from './WcsWebinarResource';
import RcwPagingModel from './RcwPagingModel';

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
