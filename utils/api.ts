/*
Sample of an instance
The case of calling "http://localhost:55894/docs#operation/listUsers"

import { Request } from '../../utils/request'

*/

import axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_API_URL

class Api {
  private axiosInstance() {
    return axios.create({
      baseURL
    })
  }

  get = async (url: string) => {
    try {
      const { data } = await this.axiosInstance().get(url)
      return data
    } catch (error: any) {
      throw error.response.data || {}
    }
  }

  post = async (url: string, d?: Object) => {
    try {
      const { data } = await this.axiosInstance().post(url, d, {})
      return data
    } catch (error: any) {
      throw error.response.data || {}
    }
  }

  put = async (url: string, d?: Object) => {
    try {
      const { data } = await this.axiosInstance().put(url, d)
      return data
    } catch (error: any) {
      throw error.response.data || {}
    }
  }

  delete = async (url: string) => {
    try {
      const { data } = await this.axiosInstance().delete(url)
      return data
    } catch (error: any) {
      throw error.response.data || {}
    }
  }
}

export default new Api()
