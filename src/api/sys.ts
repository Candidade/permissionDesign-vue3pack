import request from '@/utils/request';

/**
 * 登录
 * return Promise
 */

export const login = (data: any): any => {
  console.info({ ...data });
  return request({
    url: 'sys/login',
    method: 'POST',
    data: { ...data },
  });
};
