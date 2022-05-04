import {
  MakeRingOutCallerInfoRequestFrom, MakeRingOutCallerInfoRequestTo, MakeRingOutCallerIdInfo, MakeRingOutCoutryInfo,
} from './index';

class MakeRingOutRequest {
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
   * The audio prompt that the calling party hears when the call is connected
   */
  playPrompt?: boolean;

  /**
   */
  country?: MakeRingOutCoutryInfo;
}
export default MakeRingOutRequest;
