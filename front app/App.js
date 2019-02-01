import React, { Component } from 'react';
import { LayoutAnimation, UIManager, View, Image, Button } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Left, Body, Right, Icon } from 'native-base';




export default class App extends Component {
  state = {
    rtl: false,
    arr: []
  };

  componentWillMount() {
    if (UIManager.setLayoutAnimationEnabledExperimental)
      UIManager.setLayoutAnimationEnabledExperimental(true);

    return fetch('https://serverrrrrrr.herokuapp.com/sport')//git the data using the api 
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ arr: responseJson },//save the feed in the state
          function () {
          });
      })
      .catch((error) => {
        console.error(error);
      });

  }

  componentWillUpdate() {
    LayoutAnimation.spring();
  }



  render() {
    const rtlText = this.state.rtl && { textAlign: 'right', writingDirection: 'rtl'}; //style for text // will chang if arabic or english
    const rtlView = this.state.rtl && { flexDirection: 'row-reverse' }; //text for ather eliments // will chang if arabic or english
    
    return (
       <Container >
        <Header />
        <Button
          color="#444"
          onPress={() => this.setState({ rtl: !this.state.rtl })}
          title={this.state.rtl ? 'English' : 'العربية'} 
        />
        <Content >
        {this.state.arr.map( (feed) => (//map on the arr of news return card for each feed
            <Card key={feed._id}>
            <CardItem  style={rtlView}>
                <Thumbnail source={{uri: feed.image_url}} />
                <Body>
                  <Text  > {
                   rtlText? feed.title : feed.title_ar
                  }</Text >
                  <Text note>{ feed.created_at }</Text>
                </Body>
            </CardItem>
            <CardItem  style={rtlView}>
              <Body>
                <Text>
                  {rtlText? feed.subtitle : feed.subtitle_ar}
                </Text>
              </Body>
            </CardItem>
          </Card> 
           )
        )}
        </Content>
      </Container>
    );
  }
}