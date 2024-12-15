"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserValidationSchema = void 0;
const zod_1 = require("zod");
const emailRegex = /.+@.+\..+/;
exports.loginUserValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z
            .string({
            required_error: 'email is required',
        })
            .regex(emailRegex, { message: 'Please enter a valid email address' }),
        password: zod_1.z.string({ required_error: 'password is required' }),
    }),
});
