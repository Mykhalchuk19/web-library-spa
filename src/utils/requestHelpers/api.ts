import axios from 'axios';
import { pathOr } from 'ramda';
import { baseUrlApi } from '../../constants';
import { IParams, IRes } from './interfaces';

const HTTP_GET = 'get';

export const getParamsUrl = (params?: IParams) : string => (params ? `?${Object.keys(params).map((key: string) => `${key}=${params[key]}`).join('&')}` : '');

const createAxiosInstance = (
  headers = {},
  route: string,
  method: any,
  params?: IParams,
  queryParams?: IParams,
) => axios({
  baseURL: `${baseUrlApi}${route}`,
  headers,
  method,
  [queryParams ? 'params' : '']: queryParams,
  [method !== HTTP_GET ? 'data' : 'params']: params,
  paramsSerializer: () => getParamsUrl(params),
});

export const createRequestApi: CallableFunction = (method: any, route: string) => (params: IParams, queryParams: IParams) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return createAxiosInstance(headers, route, method, params, queryParams);
  }
  return createAxiosInstance({}, route, method, params, queryParams);
};

export const normalizeRequestData: CallableFunction = (res: IRes) => pathOr({}, ['data'], res);
