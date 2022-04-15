import { AgentV2, Contact } from './index';

class AccessTokenUserDetails {
  accessToken?: string;

  adminId?: number;

  adminUrl?: string;

  agentDetails?: AgentV2[];

  agentUrl?: string;

  iqUrl?: string;

  loginHashcode?: string;

  mainAccountId?: string;

  platformId?: string;

  port?: number;

  rcUser?: Contact;

  redirectUrl?: string;

  refreshToken?: string;

  ssoLogin?: boolean;

  tokenType?: string;
}

export default AccessTokenUserDetails;
