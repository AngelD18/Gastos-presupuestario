import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Presupuesto extends Component {
    state = {  }
    render() { 
        return (  
            <div className="alert alert-primary">
            Presupuesto: $ {this.props.presupuesto}
            </div>
        

        );
    }
}
 Presupuesto.protoTypes={
     presupuesto:PropTypes.string.isRequired
 }
export default Presupuesto;