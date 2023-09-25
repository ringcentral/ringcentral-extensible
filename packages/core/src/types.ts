import type { AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import type TokenInfo from './definitions/TokenInfo';

export interface RingCentralInterface {
  get: <T>(endpoint: string, queryParams?: {}, config?: RestRequestConfig) => Promise<RestResponse<T>>;

  delete: <T>(endpoint: string, content?: {}, queryParams?: {}, config?: RestRequestConfig) => Promise<RestResponse<T>>;

  post: <T>(endpoint: string, content?: {}, queryParams?: {}, config?: RestRequestConfig) => Promise<RestResponse<T>>;

  put: <T>(endpoint: string, content?: {}, queryParams?: {}, config?: RestRequestConfig) => Promise<RestResponse<T>>;

  patch: <T>(endpoint: string, content: {}, queryParams?: {}, config?: RestRequestConfig) => Promise<RestResponse<T>>;
}

export interface ParentInterface {
  rc: RingCentralInterface;
  path: (withParameter?: boolean) => string;
}

export type RestResponse<T = any> = AxiosResponse<T>;

export type RestRequestConfig = AxiosRequestConfig;

export interface RestOptions {
  server?: string;
  clientId?: string;
  clientSecret?: string;
  token?: TokenInfo;
  appName?: string;
  appVersion?: string;
}

export type RestMethod = Method;

export interface FormFile {
  name: string;
  filename: string;
  contentType: string;
  content: string | Buffer | Blob | NodeJS.ReadableStream;
}
