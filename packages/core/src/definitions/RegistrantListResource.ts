import type RegistrantModel from './RegistrantModel';
import type RcwPagingForwardModel from './RcwPagingForwardModel';

interface RegistrantListResource {
  /**
   * Required
   */
  records?: RegistrantModel[];

  /**
   * Required
   */
  paging?: RcwPagingForwardModel;
}

export default RegistrantListResource;
