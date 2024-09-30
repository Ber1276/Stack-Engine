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
