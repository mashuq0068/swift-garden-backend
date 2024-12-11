import { z } from 'zod'

const emailRegex = /.+@.+\..+/
export const loginUserValidationSchema = z.object({
  body: z.object({
    email: z
      .string({
        required_error: 'email is required',
      })
      .regex(emailRegex, { message: 'Please enter a valid email address' }),
    password: z.string({ required_error: 'password is required' }),
  }),
})
