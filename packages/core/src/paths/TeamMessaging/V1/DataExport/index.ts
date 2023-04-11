import DataExportTask from '../../../../definitions/DataExportTask';
import CreateDataExportTaskRequest from '../../../../definitions/CreateDataExportTaskRequest';
import DataExportTaskList from '../../../../definitions/DataExportTaskList';
import ListDataExportTasksNewParameters from '../../../../definitions/ListDataExportTasksNewParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  taskId: string | null;

  constructor(parent: ParentInterface, taskId: string | null = null) {
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
   * Endpoint: /team-messaging/v1/data-export
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   * User Permission: Glip
   */
  async list(queryParams?: ListDataExportTasksNewParameters, restRequestConfig?: RestRequestConfig): Promise<DataExportTaskList> {
    const r = await this.rc.get<DataExportTaskList>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Creates a task for Glip data export and returns a link at which the exported data will be available in future once the task is implemented. The exported data can be downloaded by calling Get Data Export Task method with the specified task ID. Simultaneously no more than 2 tasks per company can be created.
   * HTTP Method: post
   * Endpoint: /team-messaging/v1/data-export
   * Rate Limit Group: Heavy
   * App Permission: TeamMessaging
   * User Permission: Glip
   */
  async post(createDataExportTaskRequest: CreateDataExportTaskRequest, restRequestConfig?: RestRequestConfig): Promise<DataExportTask> {
    const r = await this.rc.post<DataExportTask>(this.path(false), createDataExportTaskRequest, undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Returns the links for downloading Glip data exported within the specified task. If the export task is still in progress, then only the task status will be returned. If the data is ready for downloading, then the list of URLs will be returned.
   * HTTP Method: get
   * Endpoint: /team-messaging/v1/data-export/{taskId}
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   * User Permission: Glip
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<DataExportTask> {
    if (this.taskId === null) {
      throw new Error('taskId must be specified.');
    }
    const r = await this.rc.get<DataExportTask>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
