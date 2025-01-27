import CommonEmergencyLocationResource from "./CommonEmergencyLocationResource.js";
import EmergencyLocationsPaging from "./EmergencyLocationsPaging.js";

interface EmergencyLocationsResource {
  /** */
  records?: CommonEmergencyLocationResource[];

  /** */
  paging?: EmergencyLocationsPaging;
}

export default EmergencyLocationsResource;
