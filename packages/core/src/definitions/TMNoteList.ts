import type TMNoteInfo from "./TMNoteInfo";
import type TMNavigationInfo from "./TMNavigationInfo";

interface TMNoteList {
  /** */
  records?: TMNoteInfo[];

  /** */
  navigation?: TMNavigationInfo;
}

export default TMNoteList;
