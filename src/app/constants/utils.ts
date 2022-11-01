import { ApiResponse } from './response.model';

export const cleanseEmpty = (obj: {
  [key: string]: any;
}): { [key: string]: any } => {
  const filtred: any = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (value !== null) {
      filtred[key] = value;
    }
  });
  return filtred;
};

export const resultMapper = <T>(res: ApiResponse<T>): T => res.results;

export const getIds = (urls: Array<string>): string =>
  urls.map((url) => url.split('/').pop()).join(',');
