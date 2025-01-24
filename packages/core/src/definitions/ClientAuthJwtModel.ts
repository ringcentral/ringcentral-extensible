interface ClientAuthJwtModel {
  /**
   * Client assertion type for the `client_secret_jwt` or `private_key_jwt` client authentication types,
   *  as defined by [RFC-7523](https://datatracker.ietf.org/doc/html/rfc7523#section-2.2).
   *  This parameter is mandatory if the client authentication is required and a client decided to use one of these authentication types
   */
  client_assertion_type?:
    "urn:ietf:params:oauth:client-assertion-type:jwt-bearer";

  /**
   * Client assertion (JWT) for the `client_secret_jwt` or `private_key_jwt` client authentication types,
   *  as defined by [RFC-7523](https://datatracker.ietf.org/doc/html/rfc7523#section-2.2).
   *  This parameter is mandatory if the client authentication is required and a client decided to use one of these authentication types
   */
  client_assertion?: string;
}

export default ClientAuthJwtModel;
