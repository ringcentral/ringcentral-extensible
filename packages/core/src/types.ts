import { AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import TokenInfo from './definitions/TokenInfo';

export interface RingCentralInterface {
  get<T>(
    endpoint: string,
    queryParams?: {},
    config?: RestRequestConfig,
  ): Promise<RestResponse<T>>;

  delete<T>(
    endpoint: string,
    content?: {},
    queryParams?: {},
    config?: RestRequestConfig,
  ): Promise<RestResponse<T>>;

  post<T>(
    endpoint: string,
    content?: {},
    queryParams?: {},
    config?: RestRequestConfig,
  ): Promise<RestResponse<T>>;

  put<T>(
    endpoint: string,
    content?: {},
    queryParams?: {},
    config?: RestRequestConfig,
  ): Promise<RestResponse<T>>;

  patch<T>(
    endpoint: string,
    content: {},
    queryParams?: {},
    config?: RestRequestConfig,
  ): Promise<RestResponse<T>>;
}

export interface ParentInterface {
  rc: RingCentralInterface;
  path(withParameter?: boolean): string;
}

export type RestResponse<T = any> = AxiosResponse<T>;

export type RestRequestConfig = AxiosRequestConfig;

export type RestOptions = {
  server?: string;
  clientId?: string;
  clientSecret?: string;
  token?: TokenInfo;
  appName?: string;
  appVersion?: string;
};

export type RestMethod = Method;
