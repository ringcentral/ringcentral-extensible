import RingCentral from '@rc-ex/core';
import SdkExtension from '@rc-ex/core/lib/SdkExtension';
import {AuthorizeRequest} from '@rc-ex/core/lib/definitions';
import URI, {QueryDataMap} from 'urijs';
import {createHash, randomBytes} from 'crypto';

export type AuthorizeUriOptions = {
  baseUri?: string;
};

class AuthorizeUriExtension extends SdkExtension {
  rc!: RingCentral;
  codeVerifier?: string;
  options: AuthorizeUriOptions;

  constructor(options: AuthorizeUriOptions = {}) {
    super();
    this.options = options;
  }

  async install(rc: RingCentral) {
    this.rc = rc;
  }

  buildUri(authorizeRequest: AuthorizeRequest): string {
    if (!authorizeRequest.response_type) {
      authorizeRequest.response_type = 'code';
    }
    if (!authorizeRequest.client_id) {
      authorizeRequest.client_id = this.rc.rest.clientId;
    }

    // PKCE: https://medium.com/ringcentral-developers/use-authorization-code-pkce-for-ringcentral-api-in-client-app-e9108f04b5f0
    if (authorizeRequest.code_challenge_method === 'S256') {
      this.codeVerifier = randomBytes(32)
        .toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
      authorizeRequest.code_challenge = createHash('sha256')
        .update(this.codeVerifier)
        .digest()
        .toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
    }

    let uri;
    if (this.options.baseUri) {
      uri = new URI(this.options.baseUri);
    } else {
      uri = new URI(this.rc.rest.server).directory('/restapi/oauth/authorize');
    }
    return uri.search(authorizeRequest as QueryDataMap).toString();
  }
}

export default AuthorizeUriExtension;
