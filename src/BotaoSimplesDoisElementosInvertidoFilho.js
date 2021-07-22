import React, { useState } from 'react'

export default function BotaoSimplesDoisElementosInvertidoFilho(props) {
  return (
    <div className="BotaoSimplesDoisElementosInvertidoFilho">
      <p>Meu dinheiro atual é {props.dinheirodopai}</p>
    </div>
    // Aqui estou com o state e a função que muda o state no pai, e passo apenas o state via props. Quando o state muda, o valor enviado tmb muda e sofre render automático.
  )
}
