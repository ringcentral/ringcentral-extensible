import CommonEmergencyLocationResource from "./CommonEmergencyLocationResource";
import EmergencyLocationsPaging from "./EmergencyLocationsPaging";

interface EmergencyLocationsResource {
  /** */
  records?: CommonEmergencyLocationResource[];

  /** */
  paging?: EmergencyLocationsPaging;
}

export default EmergencyLocationsResource;
