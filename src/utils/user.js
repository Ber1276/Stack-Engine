import instance from './request'
export const GetUserInfo = ({ username, password }) =>
  instance.post('user/login', {
    username,
    password
  })
