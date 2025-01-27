import PrimaryCQInfo from "./PrimaryCQInfo.js";
import AdditionalCQInfo from "./AdditionalCQInfo.js";

/**
 * Primary/additional CQ information
 */
interface CallInfoCQ {
  /** */
  primary?: PrimaryCQInfo;

  /** */
  additional?: AdditionalCQInfo;
}

export default CallInfoCQ;
