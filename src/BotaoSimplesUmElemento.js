import React, { useState } from 'react'

export default function BotaoSimplesUmElemento() {
  let [numero, setNumero] = useState(30)

  function aumentaNumero() {
    setNumero((previousStateValue) => previousStateValue + 1)
    setNumero((previousStateValue) => previousStateValue + 1)
    setNumero((previousStateValue) => previousStateValue + 1)
    // Este é o jeito correto de atualizar um state baseado no seu estado anterior. O setNumero também aceita uma funcao que leva como argumento automaticamente o valor anterior do state. Posso dar qualquer nome para a variável. Só assim consigo fazer vários setNumerosjuntos. Se eu fizesse apenas setNumero(numero + 1), ele agendaria o update para depois e nao aceitaria vários setNumero.
  }

  return (
    <div className="BotaoSimplesUmElemento">
      <h2>
        Este é o teste de um botão, com apenas um componente em todo o teste
      </h2>
      <h3>{numero}</h3>
      <button className="btn" onClick={aumentaNumero}>
        +3
      </button>
    </div>
  )
}
