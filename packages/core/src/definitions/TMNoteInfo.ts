import type TMCreatorInfo from './TMCreatorInfo';
import type LastModifiedByInfo from './LastModifiedByInfo';
import type LockedByInfo from './LockedByInfo';

interface TMNoteInfo {
  /**
   * Internal identifier of a note
   */
  id?: string;

  /**
   * Title of a note
   */
  title?: string;

  /**
   * Internal identifiers of the chat(s) where the note is posted or shared.
   */
  chatIds?: string[];

  /**
   * Preview of a note (first 150 characters of a body)
   */
  preview?: string;

  /**
   */
  creator?: TMCreatorInfo;

  /**
   */
  lastModifiedBy?: LastModifiedByInfo;

  /**
   */
  lockedBy?: LockedByInfo;

  /**
   * Note publishing status. Any note is created in 'Draft' status. After it is posted it becomes 'Active'
   */
  status?: 'Active' | 'Draft';

  /**
   * Creation time
   * Format: date-time
   */
  creationTime?: string;

  /**
   * Datetime of the note last update
   * Format: date-time
   */
  lastModifiedTime?: string;

  /**
   */
  type?: 'Note';
}

export default TMNoteInfo;
