import express from 'express'
import zodValidation from '../../middlewares/zodValidation'
import { createUserValidationSchema } from '../user/user.validation'
import { authControllers } from './auth.controller'
import { loginUserValidationSchema } from './auth.validation'
const router = express.Router()
router.post(
  '/signup',
  zodValidation(createUserValidationSchema),
  authControllers.signUpUser,
)
router.post(
  '/login',
  zodValidation(loginUserValidationSchema),
  authControllers.loginUser,
)
export const authRoutes = router
