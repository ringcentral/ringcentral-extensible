import type RingCentral from "@rc-ex/core";
import SdkExtension from "@rc-ex/core/SdkExtension";
// import type AuthorizeRequest from "@rc-ex/core/definitions/AuthorizeRequest";
import type { QueryDataMap } from "urijs";
import URI from "urijs";
import { createHash, randomBytes } from "crypto";

export interface AuthorizeUriOptions {
  baseUri?: string;
}

// todo: remove this type when spec updated
type AuthorizeRequest = {
  response_type?: string;
  client_id?: string;
  code_challenge?: string;
  code_challenge_method?: string;
  redirect_uri?: string;
  state?: string;
  ui_options?: string;
};

class AuthorizeUriExtension extends SdkExtension {
  public rc!: RingCentral;

  public codeVerifier?: string;

  public options: AuthorizeUriOptions;

  public constructor(options: AuthorizeUriOptions = {}) {
    super();
    this.options = options;
  }

  public async install(rc: RingCentral) {
    this.rc = rc;
  }

  public buildUri(_authorizeRequest: AuthorizeRequest): string {
    const authorizeRequest = _authorizeRequest;
    if (!authorizeRequest.response_type) {
      authorizeRequest.response_type = "code";
    }
    if (!authorizeRequest.client_id) {
      authorizeRequest.client_id = this.rc.rest.clientId;
    }

    // PKCE: https://medium.com/ringcentral-developers/use-authorization-code-pkce-for-ringcentral-api-in-client-app-e9108f04b5f0
    if (authorizeRequest.code_challenge_method === "S256") {
      this.codeVerifier = randomBytes(32).toString("base64").replace(/\+/g, "-")
        .replace(/\//g, "_").replace(/=/g, "");
      authorizeRequest.code_challenge = createHash("sha256")
        .update(this.codeVerifier)
        .digest()
        .toString("base64")
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=/g, "");
    }

    let uri;
    if (this.options.baseUri) {
      uri = new URI(this.options.baseUri);
    } else {
      uri = new URI(this.rc.rest.server).directory("/restapi/oauth/authorize");
    }
    return uri.search(authorizeRequest as QueryDataMap).toString();
  }

  public async revoke(): Promise<void> {}
}

export default AuthorizeUriExtension;
