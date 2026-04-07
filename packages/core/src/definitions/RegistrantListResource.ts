import type RegistrantModelWithQuestionnaire from "./RegistrantModelWithQuestionnaire.js";
import type RcwPagingForwardModel from "./RcwPagingForwardModel.js";

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
