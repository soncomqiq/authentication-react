import React from 'react'
import { Row, Col } from 'antd'
import FriendComponent from './FriendComponent'

export default class FriendsRequest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      friendsRequest: [
        {
          friendInfo: {
            name: 'Apiwut Saitanprom'
          },
          buttonList: [
            { buttonName: 'ยอมรับ' },
            { buttonName: 'ไม่ยอมรับ' }
          ]
        },
      ]
    }
  }

  renderFriendsList() {
    return this.state.friendsRequest.map(friend => (
      <FriendComponent
        friendInfo={friend.friendInfo}
        buttonList={friend.buttonList}
      />
    ))
  }

  render() {
    return (
      <Row>
        <Col span={24}>
          {this.renderFriendsList()}
        </Col>
      </Row>
    )
  }
}