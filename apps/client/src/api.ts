import { stringify } from 'qs';
import {Api, AxiosRequestConfig} from '@meetingpackage/api-client';

export const apiClient = new Api({ baseURL: 'http://localhost:3000', paramsSerializer: params => stringify(params, { arrayFormat: 'repeat' }) });

apiClient.instance.interceptors.request.use(async (config: AxiosRequestConfig) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken') || ''}`;

    return config;
});

export const updateAccessToken = (accessToken: string) => {
    localStorage.setItem('accessToken', accessToken);
}
