import React, { useState } from 'react'
import RenderListDoisElementosInvertidoFilho from './RenderListDoisElementosInvertidoFilho'

export default function RenderListDoisElementosInvertido() {
  let [minhaArray, setMinhaArray] = useState([
    'Lorem ipsum dolor sit amet consectetur.',
    'Lorem ipsum dolor sit amet consectetur.',
  ])

  let novoitem = 'Lorem ipsum dolor sit amet consectetur. '

  function adicionaNaArray() {
    setMinhaArray((estadoantigo) => [...estadoantigo, novoitem])
  }

  return (
    <div className="RenderListDoisElementosInvertido">
      <h2>
        Este é o teste de um renderlist, com dois componentes, sendo os outputs
        o pai, e os botões o filho
      </h2>

      {minhaArray.map((item) => (
        <div>{item}</div>
      ))}
      <RenderListDoisElementosInvertidoFilho funcdopai={adicionaNaArray} />
    </div>
  )
}
