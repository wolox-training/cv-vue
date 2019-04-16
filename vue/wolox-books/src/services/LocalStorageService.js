export const setToken = value => {
  window.localStorage.setItem('token', value)
}

export const getToken = () =>
  window.localStorage.getItem('token')

export const removeToken = () =>
  window.localStorage.removeItem('token')
