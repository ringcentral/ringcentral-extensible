import type MakeCallOutCallerInfoRequestFrom from "./MakeCallOutCallerInfoRequestFrom";
import type MakeCallOutCallerInfoRequestTo from "./MakeCallOutCallerInfoRequestTo";

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
