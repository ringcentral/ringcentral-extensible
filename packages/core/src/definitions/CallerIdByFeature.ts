import { CallerIdByFeatureInfo } from './index';

/**
 * Caller ID settings by feature
*/
class CallerIdByFeature {
  /**
   */
  feature?: ('RingOut' | 'RingMe' | 'CallFlip' | 'FaxNumber' | 'AdditionalSoftphone' | 'Alternate' | 'CommonPhone' | 'MobileApp' | 'Delegated');

  /**
   */
  callerId?: CallerIdByFeatureInfo;
}
export default CallerIdByFeature;
