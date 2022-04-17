import Datasets from './Datasets';
import { RestRequestConfig } from '../../../../Rest';
import {
  ListDataExportTasksParameters,
  DataExportTaskList,
  CreateDataExportTaskRequest,
  DataExportTask,
} from '../../../../definitions';
import Parent from '..';
import { RingCentral } from '../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  taskId: string | null;

  constructor(parent: Parent, taskId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.taskId = taskId;
  }

  path(withParameter = true): string {
    if (withParameter && this.taskId !== null) {
      return `${this.parent.path()}/data-export/${this.taskId}`;
    }
    return `${this.parent.path()}/data-export`;
  }

  /**
   * Returns the list of Glip data export tasks.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/glip/data-export
   * Rate Limit Group: Medium
   * App Permission: Glip
   */
  async list(
    queryParams?: ListDataExportTasksParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<DataExportTaskList> {
    const r = await this.rc.get<DataExportTaskList>(
      this.path(false),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Creates a task for Glip data export and returns a link at which the exported data will be available in future once the task is implemented. The exported data can be downloaded by calling Get Data Export Task method with the specified task ID. Simultaneously no more than 2 tasks per company can be created.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/glip/data-export
   * Rate Limit Group: Heavy
   * App Permission: Glip
   */
  async post(
    createDataExportTaskRequest: CreateDataExportTaskRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<DataExportTask> {
    const r = await this.rc.post<DataExportTask>(
      this.path(false),
      createDataExportTaskRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Returns the links for downloading Glip data exported within the specified task. If the export task is still in progress, then only the task status will be returned. If the data is ready for downloading, then the list of URLs will be returned.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/glip/data-export/{taskId}
   * Rate Limit Group: Medium
   * App Permission: Glip
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<DataExportTask> {
    if (this.taskId === null) {
      throw new Error('taskId must be specified.');
    }
    const r = await this.rc.get<DataExportTask>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  datasets(datasetId: string | null = null): Datasets {
    return new Datasets(this, datasetId);
  }
}
export default Index;
