import RegistrantModel from './RegistrantModel';
import RcwPagingForwardModel from './RcwPagingForwardModel';

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
