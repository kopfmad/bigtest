import React from 'react'

export default function ConditionalRenderDoisElementosFilho(props) {
  function resultado(variavel) {
    if (variavel === true) {
      return <div className="crde_ligado">Ligado</div>
    } else {
      return <div className="crde_desligado">Desligado</div>
    }
  }

  return (
    <div className="ConditionalRenderDoisElementosFilho">
      {resultado(props.variavel)}
    </div>
  )
}
