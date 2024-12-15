"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalErrorHandler = (err, req, res, next) => {
    let message = (err === null || err === void 0 ? void 0 : err.message) || 'something went wrong';
    console.log("err =>", err);
    let errorMessages = [
        {
            path: (err === null || err === void 0 ? void 0 : err.path) || '',
            message: (err === null || err === void 0 ? void 0 : err.message) || 'something went wrong',
        },
    ];
    res.status((err === null || err === void 0 ? void 0 : err.status) || 500).json({
        success: false,
        message,
        errorMessages,
        stack: (err === null || err === void 0 ? void 0 : err.stack) || '',
        // err,
    });
};
exports.default = globalErrorHandler;
