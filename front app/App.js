import React, { Component } from 'react';
import { LayoutAnimation,  UIManager, View ,Image, Button } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text , Left, Body, Right , Icon } from 'native-base';




export default class App extends Component {
  state = { rtl: false,
  arr : []
 };
  
  componentWillMount() {
    if (UIManager.setLayoutAnimationEnabledExperimental)
      UIManager.setLayoutAnimationEnabledExperimental(true);
     
      return fetch('https://serverrrrrrr.herokuapp.com/sport')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        this.setState({arr :responseJson },
         function(){
console.log( "statt" ,this.state.arr[1].title)
        });

      })
      .catch((error) =>{
        console.error(error);
      });
    
  }
  
  componentWillUpdate() {
    LayoutAnimation.spring();
  }



  render() {
    const rtlText = this.state.rtl && { textAlign: 'right', writingDirection: 'rtl' };
    const rtlView = this.state.rtl && { flexDirection: 'row-reverse' };
    
    return (
      
       
       <Container>
        <Header />
        <Button
          color="#444"
          onPress={() => this.setState({ rtl: !this.state.rtl })}
          title={this.state.rtl ? 'English' : 'العربية'}
        />
        <Content  >
        {this.state.arr.map( (feed) => (


<Card key={feed._id}>
            <CardItem style={rtlView}>
             
                <Thumbnail source={{uri: 'https://i.pinimg.com/originals/f6/5c/4d/f65c4d2223276318c21cd2048d3ef2bb.jpg'}} />
                <Body>
                  <Text> {
                   rtlText? feed.title : feed.title_ar
                  }</Text>
                  <Text  note>{ feed.created_at }</Text>
                </Body>
            
            </CardItem>
            <CardItem style={rtlView}>
              <Body>
                <Text>
                  {
                   rtlText? feed.subtitle : feed.subtitle_ar
                  }
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