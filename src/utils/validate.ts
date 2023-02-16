/**
 * 判断是否为外部资源
 * @param {*} path
 */
export function isExternal(path: string): Boolean {
  return /^(https?:|mailto:|tel:)/.test(path);
}
