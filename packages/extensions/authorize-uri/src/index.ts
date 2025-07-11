import type RingCentral from "@rc-ex/core";
import SdkExtension from "@rc-ex/core/SdkExtension";
// import type AuthorizeRequest from "@rc-ex/core/definitions/AuthorizeRequest";
import type { QueryDataMap } from "urijs";
import URI from "urijs";

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

function isNode() {
  return typeof process !== "undefined" &&
    process.versions?.node != null &&
    typeof window === "undefined";
}

async function generateCodeVerifier(): Promise<string> {
  const length = 32;
  if (isNode()) {
    const { randomBytes } = await import("crypto");
    return randomBytes(length).toString("base64")
      .replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
  } else {
    const array = new Uint8Array(length);
    crypto.getRandomValues(array);
    return btoa(String.fromCharCode(...array))
      .replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
  }
}

async function generateCodeChallenge(verifier: string): Promise<string> {
  if (isNode()) {
    const { createHash } = await import("crypto");
    const hash = createHash("sha256").update(verifier).digest();
    return hash.toString("base64").replace(/\+/g, "-").replace(/\//g, "_")
      .replace(/=/g, "");
  } else {
    const encoder = new TextEncoder();
    const data = encoder.encode(verifier);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashStr = String.fromCharCode(...hashArray);
    return btoa(hashStr).replace(/\+/g, "-").replace(/\//g, "_").replace(
      /=/g,
      "",
    );
  }
}

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

  public async buildUri(_authorizeRequest: AuthorizeRequest): Promise<string> {
    const authorizeRequest = _authorizeRequest;
    if (!authorizeRequest.response_type) {
      authorizeRequest.response_type = "code";
    }
    if (!authorizeRequest.client_id) {
      authorizeRequest.client_id = this.rc.rest.clientId;
    }

    // PKCE: https://medium.com/ringcentral-developers/use-authorization-code-pkce-for-ringcentral-api-in-client-app-e9108f04b5f0
    if (authorizeRequest.code_challenge_method === "S256") {
      this.codeVerifier = await generateCodeVerifier();
      authorizeRequest.code_challenge = await generateCodeChallenge(
        this.codeVerifier,
      );
      // this.codeVerifier = randomBytes(32).toString("base64").replace(/\+/g, "-")
      //   .replace(/\//g, "_").replace(/=/g, "");
      // authorizeRequest.code_challenge = createHash("sha256")
      //   .update(this.codeVerifier)
      //   .digest()
      //   .toString("base64")
      //   .replace(/\+/g, "-")
      //   .replace(/\//g, "_")
      //   .replace(/=/g, "");
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
