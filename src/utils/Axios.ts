import axios, { AxiosError, AxiosResponse } from 'axios'
import { AxiosRequestConfig } from 'axios'
import Cookies from 'js-cookie'
import { baseUrl } from './baseUrl'

const instance = axios.create({
  baseURL: baseUrl,
})

instance.interceptors.request.use((config: AxiosRequestConfig): any => {
  const token = Cookies.get('access_token')

  const newConfig: AxiosRequestConfig = {
    ...config,
    headers: {
      ...config.headers,
      ...(!config?.headers?.Authorization && {
        Authorization: token,
      }),
      'Access-Control-Allow-Origin': '*',
    },
  }

  return newConfig
})

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: AxiosError) => {
    if (error.response && error.response.status === 401) {
      Cookies.remove('access_token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

const responseBody = (response: AxiosResponse): any => {
  const responseData = response.data
  return responseData
}

const get = (url: string, config?: AxiosRequestConfig) =>
  instance.get(url, config).then(responseBody)

const post = (url: string, body?: any, config?: AxiosRequestConfig) => {
  return instance.post(url, body, config).then(responseBody)
}

const put = (url: string, body?: any) =>
  instance.put(url, body).then(responseBody)

const del = (url: string) => instance.delete(url).then(responseBody)

export const headerWithToken = (token: string) => {
  return {
    headers: {
      Authorization: token,
    },
  }
}

export const Axios = { get, post, put, del }
