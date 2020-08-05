import RingCentral from '@rc-ex/core';
import SdkExtension from '@rc-ex/core/lib/SdkExtension';
import {AuthorizeRequest} from '@rc-ex/core/lib/definitions';
import URI, {QueryDataMap} from 'urijs';

class AuthorizeUriExtension extends SdkExtension {
  rc!: RingCentral;
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
    return URI(this.rc.rest.server)
      .directory('/restapi/oauth/authorize')
      .search(authorizeRequest as QueryDataMap)
      .toString();
  }
}

export default AuthorizeUriExtension;
