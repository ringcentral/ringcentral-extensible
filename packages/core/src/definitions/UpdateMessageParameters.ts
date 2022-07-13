/**
 * Query parameters for operation updateMessage
*/
interface UpdateMessageParameters {
  /**
   */
  dateFrom?: string;

  /**
   */
  type?: ('Fax' | 'SMS' | 'VoiceMail' | 'Pager' | 'Text' | 'All');
}

export default UpdateMessageParameters;
