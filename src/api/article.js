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
