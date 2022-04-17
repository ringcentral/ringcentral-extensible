import { RestRequestConfig } from '../../../../../Rest';
import Parent from '..';
import { RingCentral } from '../../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  datasetId: string | null;

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
   * Returns the specified dataset by ID. Each dataset is a ZIP archive the size of which is limited to 1 Gb.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/glip/data-export/{taskId}/datasets/{datasetId}
   * Rate Limit Group: Heavy
   * App Permission: Glip
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<Buffer> {
    if (this.datasetId === null) {
      throw new Error('datasetId must be specified.');
    }
    const r = await this.rc.get<Buffer>(this.path(), undefined, {
      ...restRequestConfig,
      responseType: 'arraybuffer',
    });
    return r.data;
  }
}
export default Index;
