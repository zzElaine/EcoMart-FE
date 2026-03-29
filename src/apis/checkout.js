import httpInstance from "@/utils/http";

//获取下单信息 - 支持传递订单参数
export const getCheckInfoAPI = () => {
  return httpInstance({
    url: "/member/order/pre",
    method: "get",
  });
};

//创建订单
export const createOrderAPI = (data) =>{
  return httpInstance({
    url: "/member/order",
    method: "post",
    data
  });
}