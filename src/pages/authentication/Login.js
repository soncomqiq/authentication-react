import React from 'react'
import { Row, notification, Col, Form, Icon, Input, Button } from 'antd';
import logo from '../../images/logo.png'
import Axios from '../../config/axios.setup'
import jwtDecode from 'jwt-decode'
import { failLoginNotification, successLoginNotification } from '../../components/Notification/notification'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const username = this.state.username
    const password = this.state.password
    Axios.post('/loginUser', { username, password })
      .then(result => {
        console.log(result.data)
        successLoginNotification()
        const token = localStorage.setItem("ACCESS_TOKEN", result.data.token)
        const user = jwtDecode(token)
        // localStorage.setItem("User", user)
      })
      .catch(err => {
        console.error(err);
        failLoginNotification("something went wrong.")
      })
  }

  render() {
    return (
      <div>
        <Row type="flex" justify="center" align="middle" style={{ height: '100vh' }}>
          <Col md={8} sm={12} xs={24}>
            <img src={logo} alt="Logo Fakebook" style={{ width: '100%', paddingLeft: '24px', paddingRight: '24px', maxWidth: '400px' }}></img>
          </Col>
          <Col md={8} sm={12} xs={24}>
            <Form onSubmit={this.handleSubmit} className="login-form" style={{ maxWidth: '400px', width: '100%' }}>
              <Form.Item>
                <Input
                  onChange={(e) => this.setState({ username: e.target.value })}
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item>
                <Input
                  onChange={(e) => this.setState({ password: e.target.value })}
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Row>
                <Col span={12}>
                  <Form.Item>
                    <Button block type="link" className="login-form-button" href="/signup">
                      Signup
                    </Button>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item>
                    <Button
                      htmlType="submit"
                      block type="primary" className="login-form-button">
                      Log in
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row >
      </div >
    )
  }
}