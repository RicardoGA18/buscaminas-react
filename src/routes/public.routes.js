import React from 'react'
import {Route} from 'react-router-dom'

const PublicRoute = ({component,...options}) => {
  return (
    <Route {...options} component={component} />
  )
}

export default PublicRoute
