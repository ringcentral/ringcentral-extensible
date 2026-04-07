import RegistrantModelWithQuestionnaire from "./RegistrantModelWithQuestionnaire.js";
import RcwPagingForwardModel from "./RcwPagingForwardModel.js";

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
