import React from 'react'

export default function ConditionalRenderDoisElementosFilho(props) {
  function resultado(variavel) {
    if (variavel === true) {
      return <div>Ligado</div>
    } else {
      return <div>Desligado</div>
    }
  }

  return (
    <div className="ConditionalRenderDoisElementosFilho">
      {resultado(props.variavel)}
    </div>
  )
}
