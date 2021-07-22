import React, { useState } from 'react'

export default function InputFieldUmElemento() {
  let [numero, setNumero] = useState('Digite o seu nome')
  let textodoinput

  function JogaInputText(event) {
    textodoinput = event.target.value
    setNumero(textodoinput)
    // Na mesma função eu pego o evento e já uso ele no setState
  }

  return (
    <div className="InputFieldUmElemento">
      <h2>
        Este é o teste de um inputfield, com apenas um componente em todo o
        teste
      </h2>
      <div>{numero}</div>
      <input type="text" placeholder="Digite aqui" onChange={JogaInputText} />
    </div>
  )
}
