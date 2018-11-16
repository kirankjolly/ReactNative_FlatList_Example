import React, { Component } from 'react';
import {View, StyleSheet, FlatList, Button, ActivityIndicator, Dimensions} from "react-native";
import ListItem from './ListItem';

class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      seed: 1,
      data: [],
      isLoading: false,
    }
  }
  downloadItems = () => {

    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=30`;
    this.setState({ isLoading: true });
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          data: responseJson.results,
          isLoading: false,
        });
      })
      .catch(exeption => {
        this.setState({ isLoading: false });
      });
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE",
        }}
      />
    );
  }
  render() {
    if (this.state.isLoading) {
      return <View style={styles.loading}>
        <ActivityIndicator animating size="large" />
      </View>;
    }
    return <View style={styles.container}>
      <Button onPress={this.downloadItems} title="Show List" />
      <FlatList style={styles.listView} data={this.state.data} renderItem={({ item }) => <ListItem name={item.name.first} image={item.picture.thumbnail} />} ItemSeparatorComponent={this.renderSeparator} keyExtractor={item => item.email} />
    </View>;
  }
}

const dimen = Dimensions.get("window");
const styles = StyleSheet.create({
  listView: {
    padding: 10
  },
  loading: {
    height: dimen.height,
    width: dimen.width,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ListView;
