import React from 'react'

export default function BotaoSimplesDoisElementosFilho(props) {
  return (
    <button
      className="btn BotaoSimplesDoisElementosFilho"
      onClick={props.funcaodopai}
    >
      Clique para aumentar o pai
    </button>
  )
}
