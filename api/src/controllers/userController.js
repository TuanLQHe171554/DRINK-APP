import { StatusCodes } from "http-status-codes"
import ms from "ms"
import { userService } from "~/services/userService"
import ApiError from "~/utils/ApiError"


const createNew = async (req, res, next) => {
  try {
    const createBoard = await userService.createNew(req)

    res.status(StatusCodes.CREATED).json(createBoard)
  } catch (error) {
    next(error)
  }
}
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
const verifityAccount = async (req, res, next) => {
  try {
    const result = await userService.verifityAccount(req.body)


    res.status(StatusCodes.OK).json(result)
  } catch (error) {
    next(error)
  }
}


const logout = async (req, res, next) => {
  try {
    res.clearCookie('accessToken')
    res.clearCookie('refreshToken')


    res.status(StatusCodes.OK).json({ loggedOut: true })
  } catch (error) {
    next(error)
  }
}


const refreshToken = async (req, res, next) => {
  try {
    console.log(req.cookies?.refreshToken)


    const result = await userService.refreshToken(req.cookies?.refreshToken)
    res.cookie('accessToken', result.accessToken, {
      httpOnly: true,
      secure: true,
      sameSize: 'none',
      maxAge: ms('14 days')
    })
    res.status(StatusCodes.OK).json(result)
  } catch (error) {
    next(new ApiError(StatusCodes.UNAUTHORIZED, 'plece login again'))
  }
}


const update = async (req, res, next) => {
  try {
    const userId = req.jwtDecoded._id
    const userAvataFile = req.file

    const result = await userService.update(userId, req.body, userAvataFile)

    res.status(StatusCodes.OK).json(result)
  } catch (error) {
    next(error)


  }
}

const getAll = async (req, res, next) => {
  try {
    const userId = req.jwtDecoded._id

    const result = await userService.getAll(userId)

    res.status(StatusCodes.OK).json(result)
  } catch (error) {
    next(error)


  }
}
export const userController = {
  createNew,
  login,
  verifityAccount,
  logout,
  refreshToken,
  update,
  getAll
}
