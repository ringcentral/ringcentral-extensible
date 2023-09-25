import type MakeRingOutCallerInfoRequestFrom from './MakeRingOutCallerInfoRequestFrom';
import type MakeRingOutCallerInfoRequestTo from './MakeRingOutCallerInfoRequestTo';
import type MakeRingOutCallerIdInfo from './MakeRingOutCallerIdInfo';
import type MakeRingOutCountryInfo from './MakeRingOutCountryInfo';

interface MakeRingOutRequest {
  /**
   * Required
   */
  from?: MakeRingOutCallerInfoRequestFrom;

  /**
   * Required
   */
  to?: MakeRingOutCallerInfoRequestTo;

  /**
   */
  callerId?: MakeRingOutCallerIdInfo;

  /**
   * Audio prompt that a calling party hears when a call
   *  is connected
   */
  playPrompt?: boolean;

  /**
   */
  country?: MakeRingOutCountryInfo;
}

export default MakeRingOutRequest;
