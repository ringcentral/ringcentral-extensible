import Unarchive from "./Unarchive";
import Archive from "./Archive";
import Remove from "./Remove";
import Leave from "./Leave";
import Join from "./Join";
import Add from "./Add";
import type TMUpdateTeamRequest from "../../../../definitions/TMUpdateTeamRequest";
import type TMTeamInfo from "../../../../definitions/TMTeamInfo";
import type TMCreateTeamRequest from "../../../../definitions/TMCreateTeamRequest";
import type TMTeamList from "../../../../definitions/TMTeamList";
import type ListGlipTeamsNewParameters from "../../../../definitions/ListGlipTeamsNewParameters";
import type {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public chatId: string | null;

  public constructor(_parent: ParentInterface, chatId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.chatId = chatId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.chatId !== null) {
      return `${this._parent.path()}/teams/${this.chatId}`;
    }
    return `${this._parent.path()}/teams`;
  }
  /**
   * Returns the list of teams where the user is a member (both archived and active) combined with a list of public teams that can be joined by the current user. All records in response are sorted by creation time of a chat in ascending order. A team is a chat between 2 and more (unlimited number) participants assigned with specific name.
   * HTTP Method: get
   * Endpoint: /team-messaging/v1/teams
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  public async list(
    queryParams?: ListGlipTeamsNewParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<TMTeamList> {
    const r = await this.rc.get<TMTeamList>(
      this.path(false),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Creates a team, and adds a list of people to the team.
   * HTTP Method: post
   * Endpoint: /team-messaging/v1/teams
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  public async post(
    tMCreateTeamRequest: TMCreateTeamRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<TMTeamInfo> {
    const r = await this.rc.post<TMTeamInfo>(
      this.path(false),
      tMCreateTeamRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Returns information about the specified team.
   * HTTP Method: get
   * Endpoint: /team-messaging/v1/teams/{chatId}
   * Rate Limit Group: Light
   * App Permission: TeamMessaging
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<TMTeamInfo> {
    if (this.chatId === null) {
      throw new Error("chatId must be specified.");
    }
    const r = await this.rc.get<TMTeamInfo>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Deletes the specified team.
   * HTTP Method: delete
   * Endpoint: /team-messaging/v1/teams/{chatId}
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  public async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.chatId === null) {
      throw new Error("chatId must be specified.");
    }
    const r = await this.rc.delete<string>(
      this.path(),
      {},
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Updates the name and description of the specified team.
   * HTTP Method: patch
   * Endpoint: /team-messaging/v1/teams/{chatId}
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  public async patch(
    tMUpdateTeamRequest: TMUpdateTeamRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<TMTeamInfo> {
    if (this.chatId === null) {
      throw new Error("chatId must be specified.");
    }
    const r = await this.rc.patch<TMTeamInfo>(
      this.path(),
      tMUpdateTeamRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  public add(): Add {
    return new Add(this);
  }

  public join(): Join {
    return new Join(this);
  }

  public leave(): Leave {
    return new Leave(this);
  }

  public remove(): Remove {
    return new Remove(this);
  }

  public archive(): Archive {
    return new Archive(this);
  }

  public unarchive(): Unarchive {
    return new Unarchive(this);
  }
}
export default Index;
