class ReadAccountPresenceParameters {
  /**
   * Whether to return detailed telephony state
   */
  detailedTelephonyState?: boolean;

  /**
   * Whether to return SIP data
   */
  sipData?: boolean;

  /**
   * Page number for account presence information
   */
  page?: number;

  /**
   * Number for account presence information items per page
   */
  perPage?: number;
}

export default ReadAccountPresenceParameters;
