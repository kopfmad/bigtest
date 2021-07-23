import React, { useState } from 'react'
import RenderListDoisElementosFilho from './RenderListDoisElementosFilho'

export default function RenderListDoisElementos() {
  let [meuArray, setMeuArray] = useState([
    ' Lorem ipsum dolor sit amet. original ',
  ])

  let maisUm = ' Lorem ipsum dolor sit amet consectetur. '

  function apertaBotao() {
    setMeuArray((estadoantigo) => [...estadoantigo, maisUm])
    
  }

  return (
    <div className="RenderListDoisElementos">
      <h2>
        Este é o teste de um renderlist, com dois componentes, sendo o botão o
        pai, e os outputs o filho
      </h2>
      <button onClick={apertaBotao}>+1</button>
      <RenderListDoisElementosFilho imprima={meuArray} />
    </div>
  )
}
