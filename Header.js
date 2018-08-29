// import liraries
import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
            <TextInput
              style={styles.texto}
              onChangeText={this.props.cambiarTexto}
              placeholder="Aquí escribe tu texto..."
              onSubmitEditing={this.props.agregar}
            />
          </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#E2A9F3',
  },
  texto: {
    paddingHorizontal: 16,
    fontSize: 24,
  }
});

// make this component available to the app
export default Header;
