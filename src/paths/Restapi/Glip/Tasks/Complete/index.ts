import {RestRequestConfig} from '../../../../../Rest';
import {GlipCompleteTask} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Complete {
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
   * Operation: Complete Task
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/glip/tasks/{taskId}/complete
   */
  async post(
    glipCompleteTask: GlipCompleteTask,
    config?: RestRequestConfig
  ): Promise<string> {
    const r = await this.rc.post<string>(
      this.path(),
      glipCompleteTask,
      undefined,
      config
    );
    return r.data;
  }
}

export default Complete;
