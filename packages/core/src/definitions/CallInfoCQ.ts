import type AdditionalCQInfo from "./AdditionalCQInfo.js";
import type PrimaryCQInfo from "./PrimaryCQInfo.js";

/**
 * Primary/additional CQ information
 */
interface CallInfoCQ {
  /**
   */
  primary?: PrimaryCQInfo;

  /**
   */
  additional?: AdditionalCQInfo;
}

export default CallInfoCQ;
