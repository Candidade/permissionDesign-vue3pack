import md5 from 'md5';
import { defineStore } from 'pinia';
import { login } from '@/api/sys';
import { setItem, getItem } from '@/utils/storage';

//用户信息模块
export const useUserStore = defineStore('userStore', {
  state: () => ({
    token: getItem('token') || '',
  }),
  getters: {
    setToken() {
      return (token: string) => {
        this.token = token;
        setItem('token', token);
      };
    },
  },
  actions: {
    // 登录请求
    login(context: any, userInfo: any) {
      const { username, password } = userInfo;
      return new Promise(async (resolve, reject) => {
        try {
          const data = await login({
            username,
            password: md5(password),
          });
          this.setToken(data.data.data.token);
          resolve(data);
        } catch (error) {
          reject(error);
        }
      });
    },
  },
});
