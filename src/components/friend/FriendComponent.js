import React from 'react'
import { Card, Row, Col, Avatar, Button } from 'antd'

export default class FriendComponent extends React.Component {
  renderButtonList() {
    return this.props.buttonList.map(button => (
      <Col span={12}>
        <Button>{button.buttonName}</Button>
      </Col>
    ))
  }

  render() {
    console.log(this.props.buttonList[0].buttonName)
    return (
      <Row>
        <Card
          hoverable
        >
          <Row type="flex" justify="center">
            <Col>
              <Avatar shape="square" size={64} icon="user" />
            </Col>
            <Col type="flex" align="center" style={{ marginLeft: '10px' }}>
              <Row type="flex" justify="center">
                <Button type="link"><strong>{this.props.friendInfo.name}</strong></Button>
              </Row>
              <Row type="flex" justify="center">
                {this.renderButtonList()}
              </Row>
            </Col>
          </Row>
        </Card>
      </Row>
    )
  }
}