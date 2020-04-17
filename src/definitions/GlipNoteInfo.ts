import { NoteCreatorInfo, LastModifiedByInfo, LockedByInfo } from '.'

class GlipNoteInfo
{
  /**
   * Internal identifier of a note
   */
  id?: string

  /**
   * Title of a note
   */
  title?: string

  /**
   * Internal identifiers of the chat(s) where the note is posted or shared.
   */
  chatIds?: string[]

  /**
   * Preview of a note (first 150 characters of a body)
   */
  preview?: string

  /**
   * Note creator information
   */
  creator?: NoteCreatorInfo

  /**
   * Note last modification information
   */
  lastModifiedBy?: LastModifiedByInfo

  /**
   * Returned for the note being edited (locked) at the current moment. Information on the user editing the note
   */
  lockedBy?: LockedByInfo

  /**
   * Note publishing status. Any note is created in 'Draft' status. After it is posted it becomes 'Active'
   */
  status?: ('Active' | 'Draft')

  /**
   * Creation time
   */
  creationTime?: string

  /**
   * Datetime of the note last update
   */
  lastModifiedTime?: string

  /**
   */
  type?: ('Note')
}

export default GlipNoteInfo
