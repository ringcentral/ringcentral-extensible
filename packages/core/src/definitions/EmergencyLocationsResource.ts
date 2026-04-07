import CommonEmergencyLocationResource from "./CommonEmergencyLocationResource.js";
import EmergencyLocationsPaging from "./EmergencyLocationsPaging.js";
import PageNavigationModel from "./PageNavigationModel.js";

interface EmergencyLocationsResource {
  /**
   * Link to an emergency locations resource
   */
  uri?: string;

  /**
   */
  records?: CommonEmergencyLocationResource[];

  /**
   */
  paging?: EmergencyLocationsPaging;

  /**
   */
  navigation?: PageNavigationModel;
}

export default EmergencyLocationsResource;
