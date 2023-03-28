import Cookies from 'js-cookie'

export const cookies = {
  set: (key: string, value: any) => {
    Cookies.set(key, JSON.stringify(value), { expires: 365 * 2 })
  },
  get: (key: string) => {
    return JSON.parse(Cookies.get(key) || '{}')
  },
  remove: (key: string) => {
    Cookies.remove(key)
  },
}
