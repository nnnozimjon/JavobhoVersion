/* eslint-disable no-unused-vars */
declare namespace IAuth {
  interface ILoginBody {
    username: string
    password: string
    robot: boolean
  }

  interface IRegistrationBody {}
}

export default IAuth
