import React, { useState } from 'react'

export default function ConditionalRenderUmElemento() {
  let [interruptor, setInterruptor] = useState(false)

  function changeInterruptor() {
    setInterruptor((estadoAntigo) => !estadoAntigo)
  }

  return (
    <div className="ConditionalRenderUmElemento">
      <h2>
        Este é o teste de um render condicional, com apenas um componente em
        todo o teste
      </h2>
      <button onClick={changeInterruptor}>
        Clique para alterar o render abaixo
      </button>
      {interruptor == true ? (
        <p className="RenderLigado">Ligado</p>
      ) : (
        <p className="RenderDesligado">Desligado</p>
      )}
      {/* Se interruptor muda, ele so faz o rerender caso o mesmo seja um State. Então foi simples, apenas criar um State boolean, e fiz o output dependendo dele. Quando o State muda o output é reavaliado e renderizado */}
    </div>
  )
}
