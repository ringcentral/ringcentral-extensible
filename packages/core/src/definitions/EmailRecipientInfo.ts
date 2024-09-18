interface EmailRecipientInfo {
  /**
   * Internal identifier of an extension
   */
  extensionId?: string;

  /**
   * User full name
   */
  fullName?: string;

  /**
   * User extension number
   */
  extensionNumber?: string;

  /**
   * Extension status
   */
  status?: 'Enabled' | 'Disabled' | 'Frozen' | 'NotActivated' | 'Unassigned';

  /**
   * List of user email addresses from extension notification settings.
   *  By default, main email address from contact information is returned
   */
  emailAddresses?: string[];

  /**
   * Call queue manager permission
   */
  permission?: 'FullAccess' | 'Messages' | 'MemberManagement';
}

export default EmailRecipientInfo;
