import instance from '@/utils/request.js'
export const GetArticleList = async (pageNo, pageSize, token) => {
  const { data } = await instance.get('/article/page/query', {
    headers: {
      token
    },
    params: {
      pageNo,
      pageSize
    }
  })
  return data
}
