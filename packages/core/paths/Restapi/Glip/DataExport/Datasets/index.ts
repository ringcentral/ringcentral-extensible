import {RestRequestConfig} from '../../../../../Rest';
import Parent from '..';
import RingCentral from '../../../../..';

class Index {
  rc: RingCentral;
  datasetId: string | null;
  parent: Parent;

  constructor(parent: Parent, datasetId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.datasetId = datasetId;
  }

  path(withParameter = true): string {
    if (withParameter && this.datasetId !== null) {
      return `${this.parent.path()}/datasets/${this.datasetId}`;
    }

    return `${this.parent.path()}/datasets`;
  }

  /**
   * Operation: Get Data Export Task Dataset
   * Rate Limit Group: Heavy
   * Http get /restapi/v1.0/glip/data-export/{taskId}/datasets/{datasetId}
   */
  async get(config?: RestRequestConfig): Promise<Buffer> {
    if (this.datasetId === null) {
      throw new Error('datasetId must be specified.');
    }

    const r = await this.rc.get<Buffer>(this.path(), undefined, {
      ...config,
      responseType: 'arraybuffer',
    });
    return r.data;
  }
}

export default Index;
