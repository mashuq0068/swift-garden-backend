"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalErrorHandler = (err, req, res, next) => {
    let message = 'something went wrong';
    let errorMessages = [
        {
            path: (err === null || err === void 0 ? void 0 : err.path) || '',
            message: 'something went wrong',
        },
    ];
    res.status(500).json({
        success: false,
        message,
        errorMessages,
        stack: (err === null || err === void 0 ? void 0 : err.stack) || '',
        // err,
    });
};
exports.default = globalErrorHandler;
