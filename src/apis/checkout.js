import httpInstance from "@/utils/http";

//获取下单信息 - 支持传递订单参数
export const getCheckInfoAPI = () => {
  return httpInstance({
    url: "/member/order/pre",
    method: "get",
  });
};