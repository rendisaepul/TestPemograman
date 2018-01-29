/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { fetchPhotos } from './actions';
import { connect } from 'react-redux';
import { Button, Content, CardItem, Container, Text, List, ListItem, Left, Right, Body, Thumbnail } from 'native-base';


class Photos extends Component {

  getPhotos = () => {
    this.props.fetchPhotos();
  }

  render() {
    const isFetching = this.props.appData.isFetching;
    return (
      <Container>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 25 }}>REDUX SAGA EXAMPLES</Text>
          <Button style={{ alignSelf: 'center', marginTop: 10 }} onPress={() => { this.getPhotos() }}>
            <Text>{isFetching ? ('Loading...') : ('Load Data')}</Text>
          </Button>
        </View>
        <View style={{ flex: 1, marginTop: 15, backgroundColor: 'rgba(0,0,0,0.03)' }}>
          <Content>
            <List
              dataArray={this.props.appData.data}
              renderRow={(item) =>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={{ uri: item.thumbnailUrl }} />
                </Left>
                <Body>
                  <Text>{ item.title }</Text>
                </Body>
              </ListItem>}>
            </List>
          </Content>
        </View>
      </Container>
    );
  }
}

function mapStateToProps (state) {
  return {
    appData: state.appData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchPhotos: () => dispatch(fetchPhotos())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Photos);