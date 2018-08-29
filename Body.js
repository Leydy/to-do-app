// import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Tarea from './Tarea';

// create a components
class Body extends Component {
  render() {
    return (
            <View style={styles.container}>
                <FlatList
                  data={this.props.tareas}
                  renderItem={({ item }) => <Tarea item={item} eliminar={this.props.eliminar} />}
                />
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
