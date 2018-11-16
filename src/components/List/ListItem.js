import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class ListItem extends Component {
    render() {
        return <View style={styles.container}>
            <Image source={{ uri: this.props.image }} style={styles.image} />
            <Text>{this.props.name}</Text>
          </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingTop:10,
        paddingBottom:10,
    },
    image: {
        width: 30,
        height:30,        
    },
});

export default ListItem;
