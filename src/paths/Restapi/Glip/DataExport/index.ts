import DataExportTaskList from '../../../../definitions/DataExportTaskList'
import CreateDataExportTaskRequest from '../../../../definitions/CreateDataExportTaskRequest'
import DataExportTask from '../../../../definitions/DataExportTask'
import Parent from '..'
import RestClient from '../../../..'

class Index {
  rc: RestClient
  taskId: string
  parent: Parent

  constructor(parent: Parent, taskId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.taskId = taskId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.taskId != null) {
      return `${this.parent.path()}/data-export/${this.taskId}`
    }

    return `${this.parent.path()}/data-export`
  }

  /**
   * Operation: Create Data Export Task
   * Http post /restapi/v1.0/glip/data-export
   */
  async post(CreateDataExportTaskRequest createDataExportTaskRequest): Promise<DataExportTask> {
    return this.rc.post(this.path(false), createDataExportTaskRequest)
  }

  /**
   * Operation: Get Data Export Task List
   * Http get /restapi/v1.0/glip/data-export
   */
  async list(ListDataExportTasksParameters queryParams = null): Promise<DataExportTaskList> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Get Data Export Task
   * Http get /restapi/v1.0/glip/data-export/{taskId}
   */
  async get(): Promise<DataExportTask> {
    if (!this.taskId || this.taskId === null) {
      throw new Error("taskId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }
}

export default Index
