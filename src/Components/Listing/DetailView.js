import React from 'react'
import { useParams } from 'react-router-dom'

export const DetailView = ({ product }) => {
  const params = useParams()

  return (
    <div className="detailed-view">
      <h1>Detail page {params.id}</h1>
    </div>
  )
}

DetailView.propTypes = {
  product (props, propName, componentName) { }
}
