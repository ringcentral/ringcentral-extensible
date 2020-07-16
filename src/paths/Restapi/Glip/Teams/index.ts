import Unarchive from './Unarchive';
import Archive from './Archive';
import Remove from './Remove';
import Add from './Add';
import Leave from './Leave';
import Join from './Join';
import {RestRequestConfig} from '../../../../Rest';
import {
  GlipTeamsList,
  ListGlipTeamsParameters,
  GlipTeamInfo,
  GlipPostTeamBody,
  GlipPatchTeamBody,
} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Index {
  rc: RingCentral;
  chatId: string | null;
  parent: Parent;

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
   * Operation: Get Teams
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/glip/teams
   */
  async list(
    queryParams?: ListGlipTeamsParameters,
    config?: RestRequestConfig
  ): Promise<GlipTeamsList> {
    const r = await this.rc.get<GlipTeamsList>(
      this.path(false),
      queryParams,
      config
    );
    return r.data;
  }

  /**
   * Operation: Create Team
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/glip/teams
   */
  async post(
    glipPostTeamBody: GlipPostTeamBody,
    config?: RestRequestConfig
  ): Promise<GlipTeamInfo> {
    const r = await this.rc.post<GlipTeamInfo>(
      this.path(false),
      glipPostTeamBody,
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Get Team
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/glip/teams/{chatId}
   */
  async get(config?: RestRequestConfig): Promise<GlipTeamInfo> {
    if (this.chatId === null) {
      throw new Error('chatId must be specified.');
    }

    const r = await this.rc.get<GlipTeamInfo>(this.path(), undefined, config);
    return r.data;
  }

  /**
   * Operation: Update Team
   * Rate Limit Group: Medium
   * Http patch /restapi/v1.0/glip/teams/{chatId}
   */
  async patch(
    glipPatchTeamBody: GlipPatchTeamBody,
    config?: RestRequestConfig
  ): Promise<GlipTeamInfo> {
    if (this.chatId === null) {
      throw new Error('chatId must be specified.');
    }

    const r = await this.rc.patch<GlipTeamInfo>(
      this.path(),
      glipPatchTeamBody,
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Delete Team
   * Rate Limit Group: Medium
   * Http delete /restapi/v1.0/glip/teams/{chatId}
   */
  async delete(config?: RestRequestConfig): Promise<string> {
    if (this.chatId === null) {
      throw new Error('chatId must be specified.');
    }

    const r = await this.rc.delete<string>(this.path(), undefined, config);
    return r.data;
  }

  join(): Join {
    return new Join(this);
  }

  leave(): Leave {
    return new Leave(this);
  }

  add(): Add {
    return new Add(this);
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
