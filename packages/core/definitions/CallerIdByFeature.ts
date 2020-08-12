import {CallerIdByFeatureInfo} from './index';

class CallerIdByFeature {
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
  callerId?: CallerIdByFeatureInfo;
}

export default CallerIdByFeature;
