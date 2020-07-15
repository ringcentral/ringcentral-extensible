import {
  MakeCallOutCallerInfoRequestFrom,
  MakeCallOutCallerInfoRequestTo,
} from '.';

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
