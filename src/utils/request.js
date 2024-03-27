import axios from 'axios'

const instance = axios.create({})
instance.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => Promise.reject(err)
)
instance.interceptors.response.use(
  (res) => res,
  (err) => Promise.reject(err)
)
export default instance
