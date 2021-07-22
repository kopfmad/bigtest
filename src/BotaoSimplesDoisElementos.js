import React, { useState } from 'react'
import BotaoSimplesDoisElementosFilho from './BotaoSimplesDoisElementosFilho'

export default function BotaoSimplesDoisElementos() {
  let [numero, setNumero] = useState(5)

  function aumentaNumero() {
    setNumero((antigonumero) => antigonumero + 1)
  }

  return (
    <div className="BotaoSimplesDoisElementos">
      <h2>
        Este é o teste de um botão, com dois elementos, sendo o texto o pai, e o
        botão o filho
      </h2>
      <h2>{numero}</h2>
      <BotaoSimplesDoisElementosFilho funcaodopai={aumentaNumero} />
      {/* Quem tem o State é o pai, e ele tmb tem a função que muda o State. O pai joga a função para o filho. O filho executa no onClick */}
    </div>
  )
}
