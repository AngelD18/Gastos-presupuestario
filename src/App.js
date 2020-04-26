import React from 'react';
import './css/App.css'
import Header from './components/Header'
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import { validarPresupuesto } from './components/Helper'
import ControlPresupuesto from './components/ControlPresupuesto'
class App extends React.Component {
  state = {
    presupuesto: '',
    restante: '',
    gastos: {}

  }
  componentDidMount() {
    this.obtenerPresupuesto();

  }
  obtenerPresupuesto = () => {
    let presupuesto = prompt('Cual es su presupuesto')
    let resultado = validarPresupuesto(presupuesto);
    if (resultado) {
      this.setState({
        presupuesto: presupuesto,
        restante: presupuesto
      })
    } else {
      this.obtenerPresupuesto();
    }
  }
  agregarGasto = (gasto) => {
    const gastos = { //Spread Operator, copia de mi state inicial 
      ...this.state.gastos,

    }
    // console.log('Se agrego el gasto ' + gasto)
    // console.log(gasto)
    gastos[`gasto${Date.now()}`] = gasto;//TimesStamp Unico , similitud a ID
    this.restarPresupuesto(gasto.cantidadGasto);
    //Ponerlo en el state
    this.setState({
      gastos
    })
  }
  restarPresupuesto = (cantidad) => {
    //leer el gasto
    let restar=Number(cantidad); //parseo String  a number
    //tomar una copia del state actual
    let restante=this.state.restante
    //lo restamos
    restante -=restar;
  
    this.setState({
      restante
    })

  }
  render() {
    return (
      <div className="App container">

        <Header
          titulo='Gasto Semanal'
        />
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              <Formulario
                agregarGasto={this.agregarGasto}
              />

            </div>
            <div className="one-half column">
              <Listado
                gastos={this.state.gastos}
              />
              <ControlPresupuesto
                presupuesto={this.state.presupuesto}
                restante={this.state.restante}
              />

            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
