import type TMNavigationInfo from "./TMNavigationInfo.js";
import type TMNoteInfo from "./TMNoteInfo.js";

interface TMNoteList {
  /**
   */
  records?: TMNoteInfo[];

  /**
   */
  navigation?: TMNavigationInfo;
}

export default TMNoteList;
