import apiPaths from '@/constants/apiRoutes'
import { Axios } from '@/utils/Axios'
import IAuth from '@/interfaces/Auth.interface'

const login = (body: IAuth.ILoginBody) => {
  return Axios.post(apiPaths.auth.login, body)
}

const registration = (body: IAuth.IRegistrationBody) => {
  return Axios.post(apiPaths.auth.registration, body)
}

const verifyEmail = (params: any) => {
  return Axios.get(apiPaths.auth.verifyEmail, params)
}
const checkToken = (params: any) => {
  return Axios.get(apiPaths.auth.checkToken, params)
}

export const auth = {
  login,
  registration,
  verifyEmail,
  checkToken,
}
