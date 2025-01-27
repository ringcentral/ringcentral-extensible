import TMNoteInfo from "./TMNoteInfo.js";
import TMNavigationInfo from "./TMNavigationInfo.js";

interface TMNoteList {
  /** */
  records?: TMNoteInfo[];

  /** */
  navigation?: TMNavigationInfo;
}

export default TMNoteList;
