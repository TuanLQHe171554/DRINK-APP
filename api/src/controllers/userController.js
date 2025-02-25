import { StatusCodes } from "http-status-codes"
import ms from "ms"
import { userService } from "~/services/userService"

const login = async (req, res, next) => {
  try {
    const result = await userService.login(req.body)


    //handle cookie
    res.cookie('accessToken', result.accessToken, {
      httpOnly: true,
      secure: true,
      sameSize: 'none',
      maxAge: ms('14 days')
    })


    res.cookie('refreshToken', result.refreshToken, {
      httpOnly: true,
      secure: true,
      sameSize: 'none',
      maxAge: ms('14 days')
    })
    res.status(StatusCodes.OK).json(result)
  } catch (error) {
    next(error)
  }
}

export const userController = {
  login
}