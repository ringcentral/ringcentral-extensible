import type CommonEmergencyLocationResource from './CommonEmergencyLocationResource';
import type EmergencyLocationsPaging from './EmergencyLocationsPaging';

interface EmergencyLocationsResource {
  /**
   */
  records?: CommonEmergencyLocationResource[];

  /**
   */
  paging?: EmergencyLocationsPaging;
}

export default EmergencyLocationsResource;
