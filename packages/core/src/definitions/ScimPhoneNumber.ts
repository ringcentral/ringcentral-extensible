interface ScimPhoneNumber {
  /**
   * Required
   */
  type?: ('work' | 'mobile' | 'other');

  /**
   * Required
   */
  value?: string;
}

export default ScimPhoneNumber;
