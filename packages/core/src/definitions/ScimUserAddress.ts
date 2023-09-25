interface ScimUserAddress {
  /**
   */
  country?: string;

  /**
   */
  locality?: string;

  /**
   */
  postalCode?: string;

  /**
   */
  region?: string;

  /**
   */
  streetAddress?: string;

  /**
   * Required
   */
  type?: 'work';
}

export default ScimUserAddress;
