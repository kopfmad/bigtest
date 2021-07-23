import React, { useState } from 'react'
import ConditionalRenderDoisElementosFilho from './ConditionalRenderDoisElementosFilho'

export default function ConditionalRenderDoisElementos() {
  let [interruptor, setInterruptor] = useState(false)

  function apertaInterruptor() {
    setInterruptor(!interruptor)
  }

  return (
    <div className="ConditionalRenderDoisElementos">
      <h2>
        Este é o teste de um render condicional, com dois componentes, sendo o
        botão o pai, e o output o filho
      </h2>
      <button onClick={apertaInterruptor}>Clique para alterar</button>
      <ConditionalRenderDoisElementosFilho variavel={interruptor} />
    </div>
  )
}
