import React from 'react'

export default function RenderListDoisElementosFilho(props) {
  return (
    <div className="RenderListDoisElementosFilho">
      {[props.imprima.map((elemento) => <div>{elemento}</div>)]}
    </div>
  )
}
