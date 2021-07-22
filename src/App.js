import './App.css'
import BotaoSimplesUmElemento from './BotaoSimplesUmElemento'
import InputFieldUmElemento from './InputFieldUmElemento'
import RenderListUmElemento from './RenderListUmElemento'
import ConditionalRenderUmElemento from './ConditionalRenderUmElemento'
import ConditionalStylingUmElemento from './ConditionalStylingUmElemento'
import BotaoSimplesDoisElementos from './BotaoSimplesDoisElementos'
import BotaoSimplesDoisElementosInvertido from './BotaoSimplesDoisElementosInvertido'
import InputFieldDoisElementos from './InputFieldDoisElementos'
import InputFieldDoisElementosInvertido from './InputFieldDoisElementosInvertido'
import RenderListDoisElementos from './RenderListDoisElementos'
import RenderListDoisElementosInvertido from './RenderListDoisElementosInvertido'
import ConditionalRenderDoisElementos from './ConditionalRenderDoisElementos'
import ConditionalRenderDoisElementosInvertido from './ConditionalRenderDoisElementosInvertido'
import ConditionalStylingDoisElementos from './ConditionalStylingDoisElementos'
import ConditionalStylingDoisElementosInvertido from './ConditionalStylingDoisElementosInvertido'

function App() {
  return (
    <div className="App">
      <div className="Container">
        <BotaoSimplesUmElemento />
      </div>
      <div className="Container">
        <InputFieldUmElemento />
      </div>
      <div className="Container">
        <RenderListUmElemento />
      </div>
      <div className="Container">
        <ConditionalRenderUmElemento />
      </div>
      <div className="Container">
        <ConditionalStylingUmElemento />
      </div>
      <div className="Container">
        <BotaoSimplesDoisElementos />
      </div>
      <div className="Container">
        <BotaoSimplesDoisElementosInvertido />
      </div>
      <div className="Container">
        <InputFieldDoisElementos />
      </div>
      <div className="Container">
        <InputFieldDoisElementosInvertido />
      </div>
      <div className="Container">
        <RenderListDoisElementos />
      </div>
      <div className="Container">
        <RenderListDoisElementosInvertido />
      </div>
      <div className="Container">
        <ConditionalRenderDoisElementos />
      </div>
      <div className="Container">
        <ConditionalRenderDoisElementosInvertido />
      </div>
      <div className="Container">
        <ConditionalStylingDoisElementos />
      </div>
      <div className="Container">
        <ConditionalStylingDoisElementosInvertido />
      </div>
    </div>
  )
}

export default App
