import jwt from 'jsonwebtoken'
const generateToken = async (userInfo, secretSignature, tokrenLife) => {
  try {
    return jwt.sign(userInfo, secretSignature, { algorithm: 'HS256', expiresIn: tokrenLife })
  } catch (error) {
    throw new Error(error)
  }
}

const verifyToken = async (token, secretSignature) => {
  try {
    return jwt.verify(token, secretSignature)
  } catch (error) {
    throw new Error(error)
  }
}

export const JwtProvider = { generateToken, verifyToken }