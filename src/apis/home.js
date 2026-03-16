import httpInstance from "@/utils/http";
//获取轮播图 homebanner
export function getBannerAPI() {
  return httpInstance({
    url: '/home/banner'
  });
}
//homenew接口
/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export function getNewAPI() {
  return httpInstance({
    url:'/home/new'
  })
}
//homehot接口
/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
  return httpInstance({
    url:'/home/hot',
    method:'get'
  })
}
