import DataExportTask from "../../../../definitions/DataExportTask.js";
import CreateDataExportTaskRequest from "../../../../definitions/CreateDataExportTaskRequest.js";
import DataExportTaskList from "../../../../definitions/DataExportTaskList.js";
import ListDataExportTasksNewParameters from "../../../../definitions/ListDataExportTasksNewParameters.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public taskId: string | null;

  public constructor(_parent: ParentInterface, taskId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.taskId = taskId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.taskId !== null) {
      return `${this._parent.path()}/data-export/${this.taskId}`;
    }
    return `${this._parent.path()}/data-export`;
  }
  /**
   * Returns the list of Glip data export tasks.
   * HTTP Method: get
   * Endpoint: /team-messaging/v1/data-export
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   * User Permission: Glip
   */
  public async list(
    queryParams?: ListDataExportTasksNewParameters,
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
   * Endpoint: /team-messaging/v1/data-export
   * Rate Limit Group: Heavy
   * App Permission: TeamMessaging
   * User Permission: Glip
   */
  public async post(
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
   * Endpoint: /team-messaging/v1/data-export/{taskId}
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   * User Permission: Glip
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<DataExportTask> {
    if (this.taskId === null) {
      throw new Error("taskId must be specified.");
    }
    const r = await this.rc.get<DataExportTask>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
