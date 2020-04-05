import NoteCreatorInfo from './NoteCreatorInfo'
import LastModifiedByInfo from './LastModifiedByInfo'
import LockedByInfo from './LockedByInfo'

class GlipNoteInfo
{
    /// <summary>
    /// Internal identifier of a note
    /// </summary>
    id: string

    /// <summary>
    /// Title of a note
    /// </summary>
    title: string

    /// <summary>
    /// Internal identifiers of the chat(s) where the note is posted or shared.
    /// </summary>
    chatIds: string[]

    /// <summary>
    /// Preview of a note (first 150 characters of a body)
    /// </summary>
    preview: string

    /// <summary>
    /// Note creator information
    /// </summary>
    creator: NoteCreatorInfo

    /// <summary>
    /// Note last modification information
    /// </summary>
    lastModifiedBy: LastModifiedByInfo

    /// <summary>
    /// Returned for the note being edited (locked) at the current moment. Information on the user editing the note
    /// </summary>
    lockedBy: LockedByInfo

    /// <summary>
    /// Note publishing status. Any note is created in 'Draft' status. After it is posted it becomes 'Active'
    /// Enum: Active, Draft
    /// </summary>
    status: string

    /// <summary>
    /// Creation time
    /// </summary>
    creationTime: string

    /// <summary>
    /// Datetime of the note last update
    /// </summary>
    lastModifiedTime: string

    /// <summary>
    /// Enum: Note
    /// </summary>
    type: string
}

export default GlipNoteInfo