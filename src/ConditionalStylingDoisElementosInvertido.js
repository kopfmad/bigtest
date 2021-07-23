import React, { useState } from 'react'

import ConditionalStylingDoisElementosInvertidoFilho from './ConditionalStylingDoisElementosInvertidoFilho'

export default function ConditionalStylingDoisElementosInvertido() {
  let [tamanho, setTamanho] = useState(8)

  function aumentaTamanho() {
    setTamanho((tamanhoantigo) => tamanhoantigo + 4)
  }
  return (
    <div className="ConditionalStylingDoisElementosInvertido">
      <h2>
        Este é o teste de um conditional styling, com dois componentes, sendo a
        div o pai e o botão o filho
      </h2>
      <div style={{ fontSize: tamanho }}>Esse é o último teste</div>
      <ConditionalStylingDoisElementosInvertidoFilho
        funcdopai={aumentaTamanho}
      />
    </div>
  )
}
