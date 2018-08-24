import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
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

  agregarTarea= () => {
    this.setState({
      tareas: [...this.state.tareas, { texto: this.state.texto, key: Date.now() }],
      texto: '',
    });
    console.log(this.state.tareas.length);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          texto={this.state.texto}
          cambiarTexto={this.establecerTexto}
          agregar={this.agregarTarea}
        />
        <Text>{this.state.texto}</Text>
        <Body tareas={this.state.tareas} />
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
