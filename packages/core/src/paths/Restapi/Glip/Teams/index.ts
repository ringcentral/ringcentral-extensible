import Unarchive from './Unarchive';
import Archive from './Archive';
import Remove from './Remove';
import Leave from './Leave';
import Join from './Join';
import Add from './Add';
import { RestRequestConfig } from '../../../../Rest';
import {
  ListGlipTeamsParameters,
  GlipTeamsList,
  GlipPostTeamBody,
  GlipTeamInfo,
  GlipPatchTeamBody,
} from '../../../../definitions';
import Parent from '..';
import { RingCentral } from '../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  chatId: string | null;

  constructor(parent: Parent, chatId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.chatId = chatId;
  }

  path(withParameter = true): string {
    if (withParameter && this.chatId !== null) {
      return `${this.parent.path()}/teams/${this.chatId}`;
    }
    return `${this.parent.path()}/teams`;
  }

  /**
   * Returns the list of teams where the user is a member (both archived and active) combined with a list of public teams that can be joined by the current user. All records in response are sorted by creation time of a chat in ascending order. A team is a chat between 2 and more (unlimited number) participants assigned with specific name.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/glip/teams
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   * User Permission: UnifiedAppDesktop
   */
  async list(
    queryParams?: ListGlipTeamsParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<GlipTeamsList> {
    const r = await this.rc.get<GlipTeamsList>(
      this.path(false),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Creates a team, and adds a list of people to the team.  A team is a chat between 2 and more (unlimited number) participants assigned with specific name.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/glip/teams
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   * User Permission: UnifiedAppDesktop
   */
  async post(
    glipPostTeamBody: GlipPostTeamBody,
    restRequestConfig?: RestRequestConfig,
  ): Promise<GlipTeamInfo> {
    const r = await this.rc.post<GlipTeamInfo>(
      this.path(false),
      glipPostTeamBody,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Returns information about the specified team. A team is a chat between 2 and more participants assigned with specific name.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/glip/teams/{chatId}
   * Rate Limit Group: Light
   * App Permission: TeamMessaging
   * User Permission: UnifiedAppDesktop
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<GlipTeamInfo> {
    if (this.chatId === null) {
      throw new Error('chatId must be specified.');
    }
    const r = await this.rc.get<GlipTeamInfo>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Deletes the specified team. A team is a chat between 2 and more (unlimited number) participants assigned with specific name.
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/glip/teams/{chatId}
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   * User Permission: UnifiedAppDesktop
   */
  async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.chatId === null) {
      throw new Error('chatId must be specified.');
    }
    const r = await this.rc.delete<string>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Updates the name and description of the specified team. A team is a chat between 2 and more (unlimited number) participants assigned with specific name.
   * HTTP Method: patch
   * Endpoint: /restapi/{apiVersion}/glip/teams/{chatId}
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   * User Permission: UnifiedAppDesktop
   */
  async patch(
    glipPatchTeamBody: GlipPatchTeamBody,
    restRequestConfig?: RestRequestConfig,
  ): Promise<GlipTeamInfo> {
    if (this.chatId === null) {
      throw new Error('chatId must be specified.');
    }
    const r = await this.rc.patch<GlipTeamInfo>(
      this.path(),
      glipPatchTeamBody,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  add(): Add {
    return new Add(this);
  }

  join(): Join {
    return new Join(this);
  }

  leave(): Leave {
    return new Leave(this);
  }

  remove(): Remove {
    return new Remove(this);
  }

  archive(): Archive {
    return new Archive(this);
  }

  unarchive(): Unarchive {
    return new Unarchive(this);
  }
}
export default Index;
