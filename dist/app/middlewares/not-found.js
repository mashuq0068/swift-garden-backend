"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notFound = (req, res, next) => {
    res.status(404).json({
        success: false,
        statusCode: 404,
        message: 'Not Found',
    });
};
exports.default = notFound;
