import type PagingSchema from './PagingSchema';
import type EnrollmentStatus from './EnrollmentStatus';

interface ListEnrolledSpeakers {
  /**
   * Required
   */
  paging?: PagingSchema;

  /**
   * Required
   */
  records?: EnrollmentStatus[];
}

export default ListEnrolledSpeakers;
