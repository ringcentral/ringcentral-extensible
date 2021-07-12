// Query parameters for operation updateMessage
class UpdateMessageParameters {
  /**
   */
  dateFrom?: string;

  /**
   */
  type?: 'Fax' | 'SMS' | 'VoiceMail' | 'Pager' | 'Text' | 'All';
}

export default UpdateMessageParameters;
