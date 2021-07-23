import React, { useState } from 'react'
import ConditionalRenderDoisElementosInvertidoFilho from './ConditionalRenderDoisElementosInvertidoFilho'

export default function ConditionalRenderDoisElementosInvertido() {
  let [interruptor, setInterruptor] = useState(true)

  function clicaInterruptor() {
    setInterruptor(!interruptor)
  }

  function meuOutput(valor) {
    if (valor === true) {
      return <div className="crdei_ligado">Ligado</div>
    } else {
      return <div className="crdei_desligado">Desligado</div>
    }
  }

  return (
    <div className="ConditionalRenderDoisElementosInvertido">
      <h2>
        Este é o teste de um render condicional, com dois componentes, sendo o
        output o pai, e o botao o filho
      </h2>
      {meuOutput(interruptor)}
      <ConditionalRenderDoisElementosInvertidoFilho
        funcdopai={clicaInterruptor}
      />
    </div>
  )
}
