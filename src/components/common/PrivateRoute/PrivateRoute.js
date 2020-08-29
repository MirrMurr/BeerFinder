import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = ({ path, component, guardCondition, exact = false, fallbackPath }) => {
  return (
    guardCondition
      ? (<Route path={path} component={component} exact={exact} />)
      : (<Redirect to={fallbackPath} />)
  )
}

PrivateRoute.propTypes = {
  path: PropTypes.string,
  component: PropTypes.func,
  guardCondition: PropTypes.bool,
  exact: PropTypes.bool,
  fallbackPath: PropTypes.string
}
