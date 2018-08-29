// import liraries
import React, { Component } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import Tarea from './Tarea';

// create a components
class Body extends Component {
  render() {
    return (
            <View style={styles.container}>
              {this.props.cargando && 
              <ActivityIndicator
                size="large"
                color="#640064"
              />
              }
              
              {!this.props.cargando && 
              <FlatList
                data={this.props.tareas}
                renderItem={({ item }) => <Tarea item={item} eliminar={this.props.eliminar} />}
              />}
            </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#F781F3',
  },
});

// make this component available to the app
export default Body;
