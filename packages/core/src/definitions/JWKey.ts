/**
 * Public key definition in JWK format
 * (see [RFC-7517](https://www.rfc-editor.org/rfc/rfc7517.html#section-4))
 */
interface JWKey {
  /**
   * Identifies the cryptographic algorithm family used with the key
   * Required
   * Example: RSA
   */
  kty?: string;

  /**
   * Identifies the algorithm intended for use with the key
   * Required
   * Example: RS256
   */
  alg?: string;

  /**
   * Identifies the intended use of the public key. This parameter is employed to indicate whether
   *  a public key is used for encrypting data or verifying the signature on data.
   * Required
   * Example: sig
   */
  use?: "sig" | "enc";

  /**
   * An ID of the specific key within this keyset.
   *  It is used to match the `kid` parameter in JOSE header of JWT.
   * Required
   */
  kid?: string;

  /**
   * The "n" (modulus) parameter contains the modulus value for the RSA public key.
   *  It is represented as a Base64urlUInt-encoded value. (User with "RSA" key type)
   * Required
   */
  n?: string;

  /**
   * The "e" (exponent) parameter contains the exponent value for the RSA
   *  public key.  It is represented as a Base64urlUInt-encoded value. (User with "RSA" key type)
   * Required
   */
  e?: string;
}

export default JWKey;
