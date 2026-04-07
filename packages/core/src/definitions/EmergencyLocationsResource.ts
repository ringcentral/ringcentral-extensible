import type CommonEmergencyLocationResource from "./CommonEmergencyLocationResource.js";
import type EmergencyLocationsPaging from "./EmergencyLocationsPaging.js";
import type PageNavigationModel from "./PageNavigationModel.js";

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
