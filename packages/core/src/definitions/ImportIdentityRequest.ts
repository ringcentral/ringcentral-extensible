import type IdentityExtraValues from './IdentityExtraValues';

interface ImportIdentityRequest {
  /**
   * Identifier of the identity on the remote channel.
   * Required
   * Example: 9680ab94-3b78-495c-bb2c-a969954d8260
   */
  foreignId?: string;

  /**
   * The channel identifier to create the identity for.
   * Required
   * Example: 541014e17aa58d8ccf000023
   */
  sourceId?: string;

  /**
   * Company.
   * Example: Test Company
   */
  company?: string;

  /**
   * FirstName.
   * Example: John
   */
  firstName?: string;

  /**
   * Gender.
   * Example: Woman
   */
  gender?: 'Man' | 'Woman';

  /**
   * Phone number.
   * Example: +33634231224
   */
  homePhone?: string;

  /**
   * LastName.
   * Example: Doe
   */
  lastName?: string;

  /**
   * Phone number.
   * Example: +33634231224
   */
  mobilePhone?: string;

  /**
   * Screen name of the identity.
   * Example: John D.
   */
  screenName?: string;

  /**
   */
  extraValues?: IdentityExtraValues;

  /**
   * Permit to update an existing identity if set to true.
   *
   *  false by default.
   * Example: true
   */
  upsert?: boolean;
}

export default ImportIdentityRequest;
