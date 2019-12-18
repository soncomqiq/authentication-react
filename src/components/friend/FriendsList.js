import React from 'react'
import FriendComponent from './FriendComponent'
import { Col, Row } from 'antd'

export default class FriendsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      friendsList: [
        {
          friendInfo: {
            name: 'Apiwut Saitanprom',
            profilePic: ''
          },
          buttonList: [
            { buttonName: 'ลบเพื่อน' },
          ]
        },
        {
          friendInfo: {
            name: 'Addam Satid',
            profilePic: ''
          },
          buttonList: [
            { buttonName: 'ลบเพื่อน' },
          ]
        },
      ]
    }
  }

  renderFriendsList() {
    return this.state.friendsList.map(friend => (
      <Col span={12} type="flex" align="center">
        <FriendComponent
          friendInfo={friend.friendInfo}
          buttonList={friend.buttonList}
        />
      </Col>
    ))
  }

  render() {
    return (
      <Row gutter={16}>
        {this.renderFriendsList()}
      </Row>
    )
  }
}
