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
export const RegisterPost = ({ username, password }) =>
  instance.post('/user/register', {
    username,
    password
  })
export const PostSubmitArticle = async (data, token) => {
  const { data: res } = await instance.post('/article/publish', data, {
    headers: {
      token: token
    }
  })
  return res
}
