class GlipNoteCreate
{
  /**
   * Title of a note. Max allowed legth is 250 characters
   * Required
   */
  title?: string

  /**
   * Contents of a note; HTML-markuped text. Max allowed length is 102400 characters (100 Kb).
   */
  body?: string
}

export default GlipNoteCreate
