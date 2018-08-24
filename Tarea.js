// import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// create a component
class Tarea extends Component {
  render() {
    return (
            <View style={styles.container}>
                <Text style={styles.texto}>{this.props.item.texto}</Text>
                <Ionicons
                    name="md-trash"
                    size={24}
                    color="gray"
                />
            </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  texto: {
    fontSize: 24,
  }
});

// make this component available to the app
export default Tarea;
