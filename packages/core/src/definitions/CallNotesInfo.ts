interface CallNotesInfo {
  /**
   */
  notifyByEmail?: boolean;

  /**
   */
  notifyBySms?: boolean;

  /**
   */
  advancedEmailAddresses?: string[];

  /**
   */
  advancedSmsEmailAddresses?: string[];
}

export default CallNotesInfo;
