import MakeCallOutCallerInfoRequestFrom from './MakeCallOutCallerInfoRequestFrom';
import MakeCallOutCallerInfoRequestTo from './MakeCallOutCallerInfoRequestTo';

interface MakeCallOutRequest {
  /**
   * Required
   */
  from?: MakeCallOutCallerInfoRequestFrom;

  /**
   * Required
   */
  to?: MakeCallOutCallerInfoRequestTo;
}

export default MakeCallOutRequest;
