import Unarchive from './Unarchive';
import Archive from './Archive';
import Remove from './Remove';
import Leave from './Leave';
import Join from './Join';
import Add from './Add';
import TMUpdateTeamRequest from '../../../definitions/TMUpdateTeamRequest';
import TMTeamInfo from '../../../definitions/TMTeamInfo';
import TMCreateTeamRequest from '../../../definitions/TMCreateTeamRequest';
import TMTeamList from '../../../definitions/TMTeamList';
import ListGlipTeamsNewParameters from '../../../definitions/ListGlipTeamsNewParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  chatId: string | null;

  constructor(parent: ParentInterface, chatId: string | null = null) {
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
   * Endpoint: /team-messaging/{version}/teams
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  async list(queryParams?: ListGlipTeamsNewParameters, restRequestConfig?: RestRequestConfig): Promise<TMTeamList> {
    const r = await this.rc.get<TMTeamList>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Creates a team, and adds a list of people to the team.
   * HTTP Method: post
   * Endpoint: /team-messaging/{version}/teams
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  async post(tMCreateTeamRequest: TMCreateTeamRequest, restRequestConfig?: RestRequestConfig): Promise<TMTeamInfo> {
    const r = await this.rc.post<TMTeamInfo>(this.path(false), tMCreateTeamRequest, undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Returns information about the specified team.
   * HTTP Method: get
   * Endpoint: /team-messaging/{version}/teams/{chatId}
   * Rate Limit Group: Light
   * App Permission: TeamMessaging
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<TMTeamInfo> {
    if (this.chatId === null) {
      throw new Error('chatId must be specified.');
    }
    const r = await this.rc.get<TMTeamInfo>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Deletes the specified team.
   * HTTP Method: delete
   * Endpoint: /team-messaging/{version}/teams/{chatId}
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.chatId === null) {
      throw new Error('chatId must be specified.');
    }
    const r = await this.rc.delete<string>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates the name and description of the specified team.
   * HTTP Method: patch
   * Endpoint: /team-messaging/{version}/teams/{chatId}
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  async patch(tMUpdateTeamRequest: TMUpdateTeamRequest, restRequestConfig?: RestRequestConfig): Promise<TMTeamInfo> {
    if (this.chatId === null) {
      throw new Error('chatId must be specified.');
    }
    const r = await this.rc.patch<TMTeamInfo>(this.path(), tMUpdateTeamRequest, undefined, restRequestConfig);
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
