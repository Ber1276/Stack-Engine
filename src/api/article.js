import instance from '@/utils/request'
export const getArticleDetils = async (id) => {
  return await instance({
    method: 'GET',
    url: '/article/detail/query',
    headers: {
      token: localStorage.getItem('token')
    },
    params: {
      articleId: id
    }
  })
}
export const getSearchResults = async (pageNo, pageSize, keyword) => {
  const { data } = await instance.get('/article/page/query', {
    headers: {
      token: localStorage.getItem('token')
    },
    params: {
      pageNo,
      pageSize,
      title: keyword
    }
  })
  return data
}

export const getGood = (articleId) => {
  return instance({
    method: 'PATCH',
    url: '/article/add/good',
    headers: {
      token: localStorage.getItem('token')
    },
    params: {
      articleId
    }
  })
}

export const getCancelGood = (articleId) => {
  return instance({
    method: 'PATCH',
    url: '/article/cancel/good',
    headers: {
      token: localStorage.getItem('token')
    },
    params: {
      articleId
    }
  })
}
