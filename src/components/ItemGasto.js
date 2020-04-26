import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ItemGasto extends Component {

    render() {
        const { cantidadGasto, nombreGasto } = this.props.gasto;

        return (
            <li className="gastos">
                <p>
                    {nombreGasto}
                    <span className="gasto"> {cantidadGasto}</span>
                </p>

            </li>
        );
    }
}
ItemGasto.propTypes={
    gasto:PropTypes.object.isRequired
}
export default ItemGasto;