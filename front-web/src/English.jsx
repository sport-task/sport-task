import React from "react";
import { Button, WhiteSpace, Card, WingBlank } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import 'antd-mobile/lib/date-picker/style/css';
import './Styling.css';
import $ from "jquery"

class English extends React.Component {
  state = {
    arr: []
  };
  //git the array from Api and save it in the state
  componentWillMount() {
    const that = this;
    $.ajax({
      "url": "https://serverrrrrrr.herokuapp.com/sport",
      "method": "GET",
    }).done(function (response) {
      that.setState({ arr: response })
      console.log(that.state.arr)
    });

  }

  render() {

    return (
      <div id="English">
        <Button type="primary" inline size="small" href="/Arabic">Arabic</Button><WhiteSpace />
        <WingBlank size="lg">
          <WhiteSpace size="lg" />
          {this.state.arr.map((feed) => (//return card for each feed in the array
            <Card>
              <Card.Header
                title={feed.title}
                thumb={feed.image_url}
              />
              <Card.Body>
                <div>{feed.subtitle}</div>
              </Card.Body>
              <Card.Footer extra={<div>{feed.created_at}</div>} />
            </Card>
          ))}
          <WhiteSpace size="lg" />
        </WingBlank>


      </div>
    )
  }
}


export default English;