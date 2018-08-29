import React from 'react';
import { StyleSheet, View, AsyncStorage, Button } from 'react-native';
import Header from './Header';
import Body from './Body';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tareas: [],
      texto: '',
    };
  }

  establecerTexto = (value) => {
    console.log(value);
    this.setState({ texto: value });
  }

  agregarTarea = () => {
    this.setState({
      tareas: [...this.state.tareas, { texto: this.state.texto, key: Date.now() }],
      texto: '',
    });
  }

  eliminarTarea = (id) => {
    const nuevasTareas = this.state.tareas.filter((tarea) => {
      return tarea.key !== id; 
    });
    this.setState({
      tareas: nuevasTareas,
    });
  }

  guardarEnTelefono = async () => {
    await AsyncStorage.setItem('@CursoUdemy:arrayUno', JSON.stringify([{ key: 1, texto: 'uno' }, { key: 2, texto: 'dos' }]))
      .then((valor) => {
        console.log(valor);
      })
      .catch((error) => {
        console.log(error);
      });
  }
    
   recuperarEnTelefono = async () => {
     await AsyncStorage.getItem('@CursoUdemy:arrayUno')
       .then((valor) => {
         console.log(valor);
         console.log(JSON.parse(valor));
       })
       .catch((error) => {
         console.log(error);
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
        <Button
          title="guardando"
          onPress={() => { this.guardarEnTelefono(); }}
        />
        <Button
          title="recuperando"
          onPress={() => { this.recuperarEnTelefono(); }}
        />
        <Body tareas={this.state.tareas} eliminar={this.eliminarTarea} />
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
