import type IdentityModel from './IdentityModel';
import type NonEnumeratedPagingModel from './NonEnumeratedPagingModel';

interface IdentitiesList {
  /**
   * Required
   */
  records?: IdentityModel[];

  /**
   * Required
   */
  paging?: NonEnumeratedPagingModel;
}

export default IdentitiesList;
