import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { authServices } from './auth.service'

const signUpUser = catchAsync(async (req, res) => {
  const result = await authServices.signUp(req.body)
  sendResponse(res, {
    success: true,
    status: 201,
    message: 'User registered successfully',
    data: result,
  })
})
const loginUser = catchAsync(async (req, res) => {
  const {token , user} = await authServices.login(req.body)
  sendResponse(res, {
    success: true,
    status: 201,
    message: 'User logged in successfully',
    token:token,
    data: user,
  })
})

export const authControllers = {
  signUpUser,
  loginUser
}
