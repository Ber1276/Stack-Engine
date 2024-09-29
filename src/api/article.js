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
export const getSearchResults = async (keyword) => {
  return await instance.get('/article/search', {
    headers: {
      token: localStorage.getItem('token')
    },
    params: {
      keyword: keyword
    }
  })
}
