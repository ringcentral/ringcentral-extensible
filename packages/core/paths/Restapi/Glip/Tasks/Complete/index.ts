import {RestRequestConfig} from '../../../../../Rest';
import {GlipCompleteTask} from '../../../../../definitions';
import Parent from '..';
import {RingCentral} from '../../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }
  path(): string {
    return `${this.parent.path()}/complete`;
  }
  /**
   * Completes a task in the specified chat.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/glip/tasks/{taskId}/complete
   * Rate Limit Group: Medium
   */
  async post(
    glipCompleteTask: GlipCompleteTask,
    restRequestConfig?: RestRequestConfig
  ): Promise<string> {
    const r = await this.rc.post<string>(
      this.path(),
      glipCompleteTask,
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
