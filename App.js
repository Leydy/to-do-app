import React from 'react';
import { StyleSheet, View, AsyncStorage } from 'react-native';
import Header from './Header';
import Body from './Body';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tareas: [],
      texto: '',
      cargando: true,
    };
  }

  componentDidMount() { // se ejecuta despues del render,almenos un elemento de render
    this.recuperarEnTelefono();
  }

  establecerTexto = (value) => {
    console.log(value);
    this.setState({ texto: value });
  }

  agregarTarea = () => {
    const nuevasTareas = [...this.state.tareas, { texto: this.state.texto, key: Date.now() }];
    this.guardarEnTelefono(nuevasTareas);
    this.setState({
      tareas: nuevasTareas,
      texto: '',
    });
  }


  eliminarTarea = (id) => {
    const nuevasTareas = this.state.tareas.filter(tarea => tarea.key !== id);
    this.guardarEnTelefono(nuevasTareas);
    this.setState({
      tareas: nuevasTareas,
    });
  }


  guardarEnTelefono = async (tareas) => {
    await AsyncStorage.setItem('@CursoUdemy:tareas', JSON.stringify(tareas))
      .then((valor) => {
        console.log(valor);
      })
      .catch((error) => {
        console.log(error);
      });
  }

    
  recuperarEnTelefono = async () => {
    await AsyncStorage.getItem('@CursoUdemy:tareas')
      .then((valor) => {
        console.log(valor);
        console.log(JSON.parse(valor));
        setTimeout(() => { 
          this.setState({
            cargando: false,
          });
        }, 5000);
        if (valor !== null) {
          const nuevasTareas = JSON.parse(valor);
          this.setState({
            tareas: nuevasTareas,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          cargando: false,
        });
      });
  }

  
  render() {
    return (
      <View style={styles.container}>
        <Header
          texto={this.state.texto}
          cambiarTexto={this.establecerTexto}
          agregar={this.agregarTarea}
        />  
        <Body tareas={this.state.tareas} eliminar={this.eliminarTarea} cargando={this.state.cargando} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
