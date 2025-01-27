import UiCallInfoRecord from "./UiCallInfoRecord.js";

/**
 * Call information on user interface
 */
interface UiCallInfo {
  /** */
  primary?: UiCallInfoRecord;

  /** */
  additional?: UiCallInfoRecord;
}

export default UiCallInfo;
