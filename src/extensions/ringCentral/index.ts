// eslint-disable-next-line node/no-unpublished-import
import SDK from '@ringcentral/sdk';

import RingCentral from '../..';
import {AxiosResponse, Method} from 'axios';
import {RestRequestConfig} from '../../Rest';
import SdkExtension from '..';

class RingCentralExtension extends SdkExtension {
  sdk: SDK;

  constructor(sdk: SDK) {
    super();
    this.sdk = sdk;
  }

  install(rc: RingCentral): void {
    rc.request = async <T>(
      httpMethod: Method,
      endpoint: string,
      content?: {},
      queryParams?: {},
      config?: RestRequestConfig
    ): Promise<AxiosResponse<T>> => {
      const r = await this.sdk.send({
        method: httpMethod,
        url: endpoint,
        body: content,
        query: queryParams,
        headers: config?.headers,
      });
      console.log(r);
      return r;
    };
  }
}

export default RingCentralExtension;
