class GlipNoteCreate
{
    /// <summary>
    /// Title of a note. Max allowed legth is 250 characters
    /// Required
    /// </summary>
    title: string

    /// <summary>
    /// Contents of a note; HTML-markuped text. Max allowed length is 102400 characters (100 Kb).
    /// </summary>
    body: string
}

export default GlipNoteCreate