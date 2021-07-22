import React, { useState } from 'react'
import BotaoSimplesDoisElementosInvertidoFilho from './BotaoSimplesDoisElementosInvertidoFilho'

export default function BotaoSimplesDoisElementosInvertido() {
  let [dinheiroenviado, setDinheiroEnviado] = useState(100)

  function enviaDinheiro() {
    setDinheiroEnviado((dinheiroantigo) => dinheiroantigo + 100)
  }

  return (
    <div className="BotaoSimplesDoisElementosInvertido">
      <h2>
        Este é o teste de um botão, com dois elementos, sendo o botão o pai, e o
        texto o filho
      </h2>
      <button className="btn" onClick={enviaDinheiro}>
        Clique para receber 100 do pai
      </button>
      <BotaoSimplesDoisElementosInvertidoFilho
        dinheirodopai={dinheiroenviado}
      />
    </div>
  )
}
