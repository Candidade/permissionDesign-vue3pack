import { defineStore } from 'pinia';
import { useUserStore } from './modules/user';
export const useGlobalStore = defineStore('main', {
  state: () => ({}),
  getters: {},
  actions: {
    login(v: any) {
      return useUserStore().login(1, v);
    },
  },
});
