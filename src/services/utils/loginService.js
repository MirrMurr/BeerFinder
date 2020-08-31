import store from 'store/index'

export const requireLogin = (to, from, next) => {
  if (to.meta.auth) {
    if (store.getState().login.isLoggedIn) {
      next()
    }
    next.redirect('/login')
  } else {
    next()
  }
}
