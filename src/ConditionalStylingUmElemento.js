import React, { useState } from 'react'

export default function ConditionalStylingUmElemento() {
  let [largura, setLargura] = useState(300)

  function aumentaLargura() {
    setLargura((larguraantiga) => larguraantiga + 20)
  }

  return (
    <div className="ConditionalStylingUmElemento">
      <h2>
        Este é o teste de um conditional styling, com apenas um componente em
        todo o teste
      </h2>
      <button
        onClick={aumentaLargura}
        className="btn btnstyle"
        style={{ width: largura }}
        // Aqui basta criar uma expressao JS, dentro colocar um objeto com o par style:valor
      >
        Me aperte
      </button>
    </div>
  )
}
