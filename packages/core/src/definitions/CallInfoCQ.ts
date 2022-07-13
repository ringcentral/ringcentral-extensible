import PrimaryCQInfo from './PrimaryCQInfo';
import AdditionalCQInfo from './AdditionalCQInfo';

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
