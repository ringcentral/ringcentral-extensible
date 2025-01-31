import MakeCallOutCallerInfoRequestFrom from "./MakeCallOutCallerInfoRequestFrom.js";
import MakeCallOutCallerInfoRequestTo from "./MakeCallOutCallerInfoRequestTo.js";

interface MakeCallOutRequest {
  /**
   * Required
   */
  from?: MakeCallOutCallerInfoRequestFrom;

  /**
   * Required
   */
  to?: MakeCallOutCallerInfoRequestTo;

  /**
   * Optional. Dialing plan country data. If not specified, then extension home country is applied by default.
   * Format: int64
   */
  countryId?: number;
}

export default MakeCallOutRequest;
