import store from 'store/index'

export const requireLogin = (to, from, next) => {
  if (to.meta.auth) {
    if (store.getState().login.isValid) {
      next()
    }
    next.redirect('/')
  } else {
    next()
  }
}
