// Created by 熊超超 on 2021/3/30.
import request from './conn';

export interface TestModel {
  id?: string;
  name?: string;
}
// type dd = Omit<TestModel, 'string'>;
// type dd = Pick<TestModel, 'sex'>;

export default {
  testPage: (params: BasicPageParams) =>
    request<PageResponse<TestModel>>('get', '/table/getDemoList', params),
  testSave: (params: TestModel) => request<TestModel>('post', '/table/test', params),
  testDel: (params: string) => request<PageResponse>('post', '/table/test', params),
};
