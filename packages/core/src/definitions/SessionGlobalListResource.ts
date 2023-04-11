import SessionGlobalResource from './SessionGlobalResource';
import RcwPagingModel from './RcwPagingModel';

interface SessionGlobalListResource {
  /**
   * Required
   */
  records?: SessionGlobalResource[];

  /**
   * Required
   */
  paging?: RcwPagingModel;
}

export default SessionGlobalListResource;
