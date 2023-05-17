import EnrollmentPatchInput from '../../../../../definitions/EnrollmentPatchInput';
import EnrollmentStatus from '../../../../../definitions/EnrollmentStatus';
import EnrollmentInput from '../../../../../definitions/EnrollmentInput';
import ListEnrolledSpeakers from '../../../../../definitions/ListEnrolledSpeakers';
import CaiEnrollmentsListParameters from '../../../../../definitions/CaiEnrollmentsListParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public enrollmentId: string | null;

  public constructor(_parent: ParentInterface, enrollmentId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.enrollmentId = enrollmentId;
  }

  public path(withParameter = true): string {
    if (withParameter && this.enrollmentId !== null) {
      return `${this._parent.path()}/enrollments/${this.enrollmentId}`;
    }
    return `${this._parent.path()}/enrollments`;
  }

  /**
   * Returns the List of Enrolled Speakers
   * HTTP Method: get
   * Endpoint: /ai/audio/v1/enrollments
   * Rate Limit Group: Heavy
   * App Permission: AI
   */
  public async list(queryParams?: CaiEnrollmentsListParameters, restRequestConfig?: RestRequestConfig): Promise<ListEnrolledSpeakers> {
    const r = await this.rc.get<ListEnrolledSpeakers>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Creates Enrollment for the provided Speaker.
   * HTTP Method: post
   * Endpoint: /ai/audio/v1/enrollments
   * Rate Limit Group: Heavy
   * App Permission: AI
   */
  public async post(enrollmentInput: EnrollmentInput, restRequestConfig?: RestRequestConfig): Promise<EnrollmentStatus> {
    const r = await this.rc.post<EnrollmentStatus>(this.path(false), enrollmentInput, undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Get The Status of Enrollment for the provided Speaker.
   * HTTP Method: get
   * Endpoint: /ai/audio/v1/enrollments/{enrollmentId}
   * Rate Limit Group: Heavy
   * App Permission: AI
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<EnrollmentStatus> {
    if (this.enrollmentId === null) {
      throw new Error('enrollmentId must be specified.');
    }
    const r = await this.rc.get<EnrollmentStatus>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Delete The Enrollment for the provided Speaker.
   * HTTP Method: delete
   * Endpoint: /ai/audio/v1/enrollments/{enrollmentId}
   * Rate Limit Group: Heavy
   * App Permission: AI
   */
  public async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.enrollmentId === null) {
      throw new Error('enrollmentId must be specified.');
    }
    const r = await this.rc.delete<string>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Add newer audio data to improve an existing speaker enrollment
   * HTTP Method: patch
   * Endpoint: /ai/audio/v1/enrollments/{enrollmentId}
   * Rate Limit Group: Heavy
   * App Permission: AI
   */
  public async patch(enrollmentPatchInput: EnrollmentPatchInput, restRequestConfig?: RestRequestConfig): Promise<EnrollmentStatus> {
    if (this.enrollmentId === null) {
      throw new Error('enrollmentId must be specified.');
    }
    const r = await this.rc.patch<EnrollmentStatus>(this.path(), enrollmentPatchInput, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
