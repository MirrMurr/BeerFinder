import React from 'react'
import { useParams } from 'react-router-dom'

export const BeerInfo = ({ product }) => {
  const params = useParams()

  // TODO Flux storage query

  return (
    <div className="beer-info">
      <h1>Detail page {params.id}</h1>
    </div>
  )
}

BeerInfo.propTypes = {
  product (props, propName, componentName) { }
}
