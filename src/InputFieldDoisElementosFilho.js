import React from 'react'

export default function InputFieldDoisElementosFilho(props) {
  function pegaInput(e) {
    props.funcdopai(e.target.value)
  }

  return (
    <input
      type="text"
      placeholder="Digite aqui"
      className="InputFieldDoisElementosFilho"
      onChange={pegaInput}
    />
  )
}
