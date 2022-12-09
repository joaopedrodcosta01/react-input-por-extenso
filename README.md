# React Input por Extenso
| Um componente React que retorna números em 3 categorias:
| - Normal
| - Monetário
| - Porcentagem
| Todos esses números por extenso.

## Maneiras de instalar esta biblioteca:

### 1. NPM
```bash
npm install react-input-extenso
```
### 2. yarn
```bash
yarn add react-input-extenso
```

## Como usar

Uma das maneiras simples de usarmos esse componente:
```jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ReactInputPorExtenso from 'react-input-extenso';

const App = () => {
    const [numero, setNumero] = useState("")
    return (
        <>
            <ReactInputPorExtenso tipoExtenso="monetario" onChange={numeroExtenso => setNumero(numeroExtenso)}/>
            <p><strong>Número por extenso</strong>: {numero}</p>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
```

## Propriedades

| Propriedade | Valor Inicial | Tipo | Descrição            |
|-------------|---------------|------|----------------------|
|tipoExtenso  |normal         |string|Formato de extensão   |



