import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://49.232.134.192:8081/'
})
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
