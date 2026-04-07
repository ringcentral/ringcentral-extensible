/**
 * This objects denotes availability of transcription of certain type as post meeting artefact. The trancript's
 * content can be accessed via via POST '/rcvideo/v1/history/meetings/{meetingId}/access-materials'
 * or POST '/rcvideo/v1/history/links' APIs
 * 
*/
interface Transcriptions {
    /**
   * Required
   */
  id?: string;

  /**
   * Required
   */
  type?: ('LiveTranscription');
}

export default Transcriptions;
