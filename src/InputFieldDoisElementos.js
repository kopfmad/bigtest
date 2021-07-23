import React, { useState } from 'react'
import InputFieldDoisElementosFilho from './InputFieldDoisElementosFilho'

export default function InputFieldDoisElementos() {
  let [nome, setNome] = useState('kleberson')

  function mudaNome(novonome) {
    setNome(novonome)
  }

  return (
    <div
      className="InputFieldDoisElementos"
      className="InputFieldDoisElementos"
    >
      <h2>
        Este é o teste de um inputfield, com dois elementos, sendo o texto o
        pai, e o inputfield o filho
      </h2>
      <h2>O nome é {nome}</h2>
      <InputFieldDoisElementosFilho funcdopai={mudaNome} />
    </div>
  )
}
