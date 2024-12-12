import { Response } from "express";
export interface IMeta {
  total: number;
  limit: number;
  totalPages: number;
  currentPage: number;
}
interface IResponseData<T> {
  success: true;
  status: number;
  message: string;
  meta?: IMeta;
  token?:string;
  data?: T;
}

const sendResponse = <T>(res: Response, responseData: IResponseData<T>) => {
  res.status(responseData.status).json({
    success: responseData?.success,
    message: responseData?.message,
    ...(responseData.meta ? { meta: responseData?.meta } : {}),
    ...(responseData.token ? { token: responseData?.token} : {}),
    ...(responseData.data ? { data: responseData?.data } : {}),
  });
};
export default sendResponse;
