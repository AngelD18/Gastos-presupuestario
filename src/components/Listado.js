import React, { Component } from 'react';
import ItemGasto from './ItemGasto';
import PropTypes from 'prop-types'

class Listado extends Component {

    render() {
        return (
            <div className="gastos-realizados">
                <h2><b>Listado</b></h2>
                {Object.keys(this.props.gastos).map(key => (
                     <ItemGasto
                     key={key}
                     gasto={this.props.gastos[key]}
                     />
                ))}
               
            </div>
        );
    }
}
Listado.propTypes={
    gastos:PropTypes.object.isRequired
}
export default Listado;