import type RcwPagingForwardModel from "./RcwPagingForwardModel.js";
import type RegistrantModelWithQuestionnaire from "./RegistrantModelWithQuestionnaire.js";

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
