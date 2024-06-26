/**
 * Returned for the note being edited (locked) at the current moment. Information on the user editing the note
 */
interface LockedByInfo {
  /**
   * Internal identifier of the user editing the note
   */
  id?: string;
}

export default LockedByInfo;
