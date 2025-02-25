import { StatusCodes } from "http-status-codes"
import ApiError from "~/utils/ApiError"
import bcrypt from 'bcryptjs'
import { userModal } from "~/models/userModal"
import { JwtProvider } from "~/providers/JwtProvider"
import { env } from "~/config/environment"
import { pickUser } from "~/utils/algorithms"


const login = async (data) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const userExits = await userModal.findOneByEmail(data.email)


    if (!userExits) throw new ApiError(StatusCodes.NOT_FOUND, 'Email not exits!')


    if (!userExits.isActive) throw new ApiError(StatusCodes.NOT_ACCEPTABLE, 'This account is not activated!')


    if (!bcrypt.compareSync(data.password, userExits.password)) throw new ApiError(StatusCodes.NOT_ACCEPTABLE, 'The email or password is incorrect!')


    /** if it don't have error, create token return frontend */
    //create user info in jwt token
    const userInfo = { _id: userExits._id, email: userExits.email }


    // create access token and fresh token


    const accessToken = await JwtProvider.generateToken(
      userInfo,
      env.ACCESS_TOKEN_SECRET_SIGNATURE,
      // 5
      env.ACCESS_TOKEN_LIFE
    )


    const refreshToken = await JwtProvider.generateToken(
      userInfo,
      env.REFRESH_TOKEN_SECRET_SIGNATURE,
      // '1h'
      env.REFRESH_TOKEN_LIFE
    )


    return {
      accessToken,
      refreshToken,
      ...pickUser(userExits)
    }
  } catch (error) {
    throw error
  }
}

export const userService = {
  login
}