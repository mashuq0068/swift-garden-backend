"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, responseData) => {
    res.status(responseData.status).json(Object.assign(Object.assign(Object.assign({ success: responseData === null || responseData === void 0 ? void 0 : responseData.success, message: responseData === null || responseData === void 0 ? void 0 : responseData.message }, (responseData.meta ? { meta: responseData === null || responseData === void 0 ? void 0 : responseData.meta } : {})), (responseData.token ? { token: responseData === null || responseData === void 0 ? void 0 : responseData.token } : {})), (responseData.data ? { data: responseData === null || responseData === void 0 ? void 0 : responseData.data } : {})));
};
exports.default = sendResponse;
