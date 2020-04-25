import Unarchive from './Unarchive'
import Archive from './Archive'
import Remove from './Remove'
import Add from './Add'
import Leave from './Leave'
import Join from './Join'
import { GlipTeamsList, ListGlipTeamsParameters, GlipTeamInfo, GlipPostTeamBody, GlipPatchTeamBody } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

class Teams {
  rc: RestClient
  chatId: (string | null)
  parent: Parent

  constructor (parent: Parent, chatId: (string | null) = null) {
    this.parent = parent
    this.rc = parent.rc
    this.chatId = chatId
  }

  path (withParameter: boolean = true): string {
    if (withParameter && this.chatId !== null) {
      return `${this.parent.path()}/teams/${this.chatId}`
    }

    return `${this.parent.path()}/teams`
  }

  /**
   * Operation: Get Teams
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/glip/teams
   */
  async list (queryParams?: ListGlipTeamsParameters): Promise<GlipTeamsList> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Create Team
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/glip/teams
   */
  async post (glipPostTeamBody: GlipPostTeamBody): Promise<GlipTeamInfo> {
    return this.rc.post(this.path(false), glipPostTeamBody)
  }

  /**
   * Operation: Get Team
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/glip/teams/{chatId}
   */
  async get (): Promise<GlipTeamInfo> {
    if (this.chatId === null) {
      throw new Error('chatId must be specified.')
    }

    return this.rc.get(this.path())
  }

  /**
   * Operation: Update Team
   * Rate Limit Group: Medium
   * Http patch /restapi/v1.0/glip/teams/{chatId}
   */
  async patch (glipPatchTeamBody: GlipPatchTeamBody): Promise<GlipTeamInfo> {
    if (this.chatId === null) {
      throw new Error('chatId must be specified.')
    }

    return this.rc.patch(this.path(), glipPatchTeamBody)
  }

  /**
   * Operation: Delete Team
   * Rate Limit Group: Medium
   * Http delete /restapi/v1.0/glip/teams/{chatId}
   */
  async delete (): Promise<string> {
    if (this.chatId === null) {
      throw new Error('chatId must be specified.')
    }

    return this.rc.delete(this.path())
  }

  join (): Join {
    return new Join(this)
  }

  leave (): Leave {
    return new Leave(this)
  }

  add (): Add {
    return new Add(this)
  }

  remove (): Remove {
    return new Remove(this)
  }

  archive (): Archive {
    return new Archive(this)
  }

  unarchive (): Unarchive {
    return new Unarchive(this)
  }
}

export default Teams
