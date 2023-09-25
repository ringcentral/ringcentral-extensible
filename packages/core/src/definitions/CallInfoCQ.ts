import type PrimaryCQInfo from './PrimaryCQInfo';
import type AdditionalCQInfo from './AdditionalCQInfo';

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
