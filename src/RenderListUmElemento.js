import React, { useState } from 'react'

export default function RenderListUmElemento() {
  let [minhaArray, setMinhaArray] = useState([
    ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, perferendis. ',
  ]) //Como preciso renderizar quando da update, preciso do useState
  let lorem_10 =
    ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, perferendis. '

  function adicionaNaArray() {
    setMinhaArray((arrayantiga) => [...arrayantiga, lorem_10])
  }
  //Normalmente eu faria a atualização da lista com push(), mas aqui tenho que fazer isso dentro do setState. Além disso uso ...spread operator, que vai quebrar a array antiga em varios elementos, e adicionar mais um elemento lorem_10. Com isso vou adicionando strings na minha array especial criada com useState. Novamente aqui eu tenho um caso que o state atual depende do anterior, pois estou adicionando algo por cima do anterior.

  return (
    <div className="RenderListUmElemento">
      <h2>
        Este é o teste de um renderlist, com apenas um componente em todo o
        teste
      </h2>
      <button onClick={adicionaNaArray}>+ um lorem10</button>

      {minhaArray.map((item) => (
        <p>{item}</p>
      ))}
      {/* Por fim eu uso o map para passar uma função na minha array, que vai retornar um <p>item</p> para cada item da minhaArray. É assim que eu faço o render de vários elementos de uma array. */}
    </div>
  )
}
