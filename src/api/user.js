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
export const GetArticleList = async (page, token) => {
  return await instance.get('/article/page/query', {
    headers: {
      token: token
    },
    params: {
      pageNo: page,
      pageSize: 8
    }
  })
}
export const DeleteArticle = async (id, token) => {
  return await instance.delete(`/article/delete/`, {
    headers: {
      token: token
    },
    params: {
      articleId: id
    }
  })
}
