import PagingSchema from "./PagingSchema";
import EnrollmentStatus from "./EnrollmentStatus";

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
