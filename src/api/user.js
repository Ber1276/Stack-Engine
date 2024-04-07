import instance from '../utils/request.js'
export const GetUserInfo = ({ username, password }) =>
  instance.post('user/login', {
    username,
    password
  })
export const GetUserDetails = async (id, token) => {
  const { data } = await instance.get(`/user/query/${id}`, {
    headers: {
      token: token
    }
  })
  return data
}

export const GetUserImg = async (filename, token) =>
  await instance.get('/user/download/avatar', {
    headers: {
      token: token
    },
    params: {
      fileName: filename
    }
  })
