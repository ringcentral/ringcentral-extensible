import GlipPatchTeamBody from '../../../../definitions/GlipPatchTeamBody'
import GlipPostTeamBody from '../../../../definitions/GlipPostTeamBody'
import GlipTeamInfo from '../../../../definitions/GlipTeamInfo'
import ListGlipTeamsParameters from '../../../../definitions/ListGlipTeamsParameters'
import GlipTeamsList from '../../../../definitions/GlipTeamsList'
import Parent from '..'
import RestClient from '../../../..'

class Index {
  rc: RestClient
  chatId: string
  parent: Parent

  constructor(parent: Parent, chatId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.chatId = chatId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.chatId != null) {
      return `${this.parent.path()}/teams/${this.chatId}`
    }

    return `${this.parent.path()}/teams`
  }

  /**
   * Operation: Get Teams
   * Http get /restapi/v1.0/glip/teams
   */
  async list(queryParams?: ListGlipTeamsParameters): Promise<GlipTeamsList> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Create Team
   * Http post /restapi/v1.0/glip/teams
   */
  async post(glipPostTeamBody: GlipPostTeamBody): Promise<GlipTeamInfo> {
    return this.rc.post(this.path(false), glipPostTeamBody)
  }

  /**
   * Operation: Get Team
   * Http get /restapi/v1.0/glip/teams/{chatId}
   */
  async get(): Promise<GlipTeamInfo> {
    if (!this.chatId || this.chatId === null) {
      throw new Error("chatId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }

  /**
   * Operation: Update Team
   * Http patch /restapi/v1.0/glip/teams/{chatId}
   */
  async patch(glipPatchTeamBody: GlipPatchTeamBody): Promise<GlipTeamInfo> {
    if (!this.chatId || this.chatId === null) {
      throw new Error("chatId must not be undefined or null")
    }

    return this.rc.patch(this.path(), glipPatchTeamBody)
  }

  /**
   * Operation: Delete Team
   * Http delete /restapi/v1.0/glip/teams/{chatId}
   */
  async delete(): Promise<string> {
    if (!this.chatId || this.chatId === null) {
      throw new Error("chatId must not be undefined or null")
    }

    return this.rc.delete(this.path())
  }
}

export default Index
