import PagingSchema from "./PagingSchema.js";
import EnrollmentStatus from "./EnrollmentStatus.js";

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
