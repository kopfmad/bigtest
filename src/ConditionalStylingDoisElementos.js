import { SCOPABLE_TYPES } from '@babel/types'
import React, { useState } from 'react'
import ConditionalStylingDoisElementosFilho from './ConditionalStylingDoisElementosFilho'

export default function ConditionalStylingDoisElementos() {
  let [tamanho, setTamanho] = useState(300)

  function aumentaTamanho() {
    setTamanho((tamanhoantigo) => tamanhoantigo + 50)
  }

  return (
    <div className="ConditionalStylingDoisElementos">
      <h2>
        Este é o teste de um conditional styling, com dois componentes, sendo o
        botão o pai e a div o filho
      </h2>
      <button onClick={aumentaTamanho}>aperte para mudar o tamanho</button>
      <ConditionalStylingDoisElementosFilho passastyle={tamanho} />
    </div>
  )
}
