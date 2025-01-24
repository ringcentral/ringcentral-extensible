import type RegistrantModelWithQuestionnaire from "./RegistrantModelWithQuestionnaire";
import type RcwPagingForwardModel from "./RcwPagingForwardModel";

interface RegistrantListResource {
  /**
   * Required
   */
  records?: RegistrantModelWithQuestionnaire[];

  /**
   * Required
   */
  paging?: RcwPagingForwardModel;
}

export default RegistrantListResource;
