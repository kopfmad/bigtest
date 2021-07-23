import React, { useState } from 'react'
import InputFieldDoisElementosInvertidoFilho from './InputFieldDoisElementosInvertidoFilho'

export default function InputFieldDoisElementosInvertido() {
  let [nome, setNome] = useState('Alexa')

  function getData(valor) {
    console.log(valor.target.value)
    setNome(valor.target.value)
  }
  return (
    <div className="InputFieldDoisElementosInvertido">
      <h2>
        Este é o teste de um inputfield, com dois elementos, sendo o inputfield
        o pai, e o texto o filho
      </h2>
      <input type="text" placeholder="Digite aqui" onChange={getData} />
      <InputFieldDoisElementosInvertidoFilho nome={nome} />
    </div>
  )
}
