import RegistrantModelWithQuestionnaire from "./RegistrantModelWithQuestionnaire";
import RcwPagingForwardModel from "./RcwPagingForwardModel";

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
