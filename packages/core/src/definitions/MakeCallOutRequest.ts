import {
  MakeCallOutCallerInfoRequestFrom,
  MakeCallOutCallerInfoRequestTo,
} from './index';

class MakeCallOutRequest {
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
