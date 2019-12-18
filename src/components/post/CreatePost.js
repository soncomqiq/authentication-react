import React from 'react'
import { Row, Card, Col, Divider, Avatar, Input, Icon, Button, Upload } from 'antd'

const { TextArea } = Input

export default class CreatePost extends React.Component {
  render() {
    return (
      <Row type="flex" justify="center" style={{ paddingTop: '10px' }}>
        <Col span={24}>
          <Card type="inner" title="Create post">
            <Row>
              <Col span={4} style={{ paddingRight: '5px' }}>
                <Row type="flex" justify="center">
                  <Avatar src={this.props.avatarSrc} />
                </Row>
              </Col>
              <Col span={20}>
                <TextArea
                  placeholder="เขียนอะไรบางอย่างสิ"
                  autoSize={{ minRows: 2, maxRows: 6 }}
                />
              </Col>
            </Row>
            <Divider style={{ marginBottom: '15px', marginTop: '15px' }} />
            <Row>
              <Upload>
                <Button>
                  <Icon type="picture" /> Picture
                </Button>
              </Upload>
            </Row>
          </Card>
        </Col>
      </Row>
    )
  }
}
