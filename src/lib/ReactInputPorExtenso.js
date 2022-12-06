import React from "react";
import PropTypes from "prop-types";
import numero from 'numero-por-extenso';

const ReactInputPorExtenso = ({tipoExtenso, onChange, ...props}) => ( <input type="number" onChange={e => {
    const numeroPorExtenso = numero.porExtenso(e.target.value, numero.estilo[tipoExtenso]);
    onChange(numeroPorExtenso, e);
}}
{...props}
/>
);

ReactInputPorExtenso.PropTypes={
    tipoExtenso: PropTypes.oneOf(['normal', 'monetario', 'porcentagem'])
}

ReactInputPorExtenso.defaultProps = {
    tipoExtenso: "Normal"
}

export default ReactInputPorExtenso;