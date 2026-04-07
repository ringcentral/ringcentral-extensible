import type TMNoteInfo from "./TMNoteInfo.js";
import type TMNavigationInfo from "./TMNavigationInfo.js";

interface TMNoteList {
  /**
   */
  records?: TMNoteInfo[];

  /**
   */
  navigation?: TMNavigationInfo;
}

export default TMNoteList;
