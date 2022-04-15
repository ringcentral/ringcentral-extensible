import { ApplicationContext } from './index';

class RedirectView {
  applicationContext?: ApplicationContext;

  attributesMap?: object;

  beanName?: string;

  contentType?: string;

  exposePathVariables?: boolean;

  hosts?: string[];

  propagateQueryProperties?: boolean;

  redirectView?: boolean;

  requestContextAttribute?: string;

  staticAttributes?: object;

  url?: string;
}

export default RedirectView;
