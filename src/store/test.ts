// Created by 熊超超 on 2021/3/30.

import { defineStore } from 'pinia';
import { store } from '/@/store';
import api, { TestModel } from '/@@/api/test/test';

export const useTestStore = defineStore({
  id: 'test',
  state: (): TestModel => ({
    name: '',
  }),
  actions: {
    testDel(params: string) {
      return api.testDel(params);
    },
    testPage(params: BasicPageParams) {
      this.name = '1243';
      return api.testPage(params);
    },
    testSave(params: TestModel) {
      return api.testSave(params);
    },
  },
});

// Need to be used outside the setup
export function useTestStoreWidthOut() {
  return useTestStore(store);
}
