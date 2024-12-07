/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler, Request } from 'express';

interface IErrorMessage {
  path: string,
  message : string
}


const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let message = err?.message || 'something went wrong';
  console.log("err =>",err);
  let errorMessages: IErrorMessage[] = [
    {
      path: err?.path || '',
      message:err?.message || 'something went wrong',
    },
  ];

  res.status(err?.status || 500).json({
    success: false,
    message,
    errorMessages,
    stack: err?.stack || '',
    // err,
  });
};

export default globalErrorHandler;
