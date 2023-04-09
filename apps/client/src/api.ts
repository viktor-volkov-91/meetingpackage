import {Api} from "@meetingpackage/api-client";
import { stringify } from 'qs';

export const apiClient = new Api({ baseURL: 'http://localhost', paramsSerializer: params => stringify(params, { arrayFormat: 'repeat' }) });
