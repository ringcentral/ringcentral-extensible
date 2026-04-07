import type PrimaryCQInfo from "./PrimaryCQInfo.js";
import type AdditionalCQInfo from "./AdditionalCQInfo.js";

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
