import { CallerIdByFeatureInfoRequest } from './index';

/**
 * Caller ID settings by feature
 */
class CallerIdByFeatureRequest {
  /**
   */
  feature?:
  | 'RingOut'
  | 'RingMe'
  | 'CallFlip'
  | 'FaxNumber'
  | 'AdditionalSoftphone'
  | 'Alternate'
  | 'CommonPhone'
  | 'MobileApp'
  | 'Delegated';

  /**
   */
  callerId?: CallerIdByFeatureInfoRequest;
}
export default CallerIdByFeatureRequest;
