// Created by 熊超超 on 2021/7/8.
import { defHttp } from '/@/utils/http/axios';

export default function request<T>(
  method: Method,
  url: string,
  params: any,
  options?: RequestOptions
): Promise<ResponseData<T>> {
  return defHttp
    .request<T>({ url, method, params }, options)
    .then((data) => {
      return { data };
    })
    .catch((error) => {
      return { error };
    });
}
