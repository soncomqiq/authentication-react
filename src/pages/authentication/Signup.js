import React from 'react'
import { Row, Form, Icon, Input, Col, Button } from 'antd'
import logo from '../../images/logo.png'
import Axios from '../../config/axios.setup'

class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isDirty: false,
    }
  }

  handleDirtyBlur = e => {
    const { value } = e.target
    this.setState({ isDirty: this.state.isDirty || !!value })
  }

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props
    if (value && value !== form.getFieldValue('password')) {
      callback('Password และ Confirm password ไม่ตรงกัน')
    } else {
      callback()
    }
  }

  compareToSecondPassword = (rule, value, callback) => {
    const { form } = this.props
    if (value && this.state.isDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback()
  }

  submitForm = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, value) => {
      if (!err) {
        Axios.post('/registerUser', {
          username: value.username,
          password: value.password,
          name: value.name
        })
          .then(result => {
            console.log(result)
          })
          .catch(err => {
            console.error(err)
          })
        this.props.form.resetFields()
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Row type="flex" style={{ height: '100vh' }} align="middle">
        <Col span={24} >
          <Row type="flex" justify="center" align="middle">
            <Col md={8} sm={12} xs={24} type="flex" justify="center" align="middle">
              <img src={logo} alt="Logo Fakebook" style={{ height: '100%', maxHeight: '300px' }}></img>
            </Col>
          </Row>
          <Row type="flex" justify="center" align="middle" style={{ marginTop: '40px' }}>
            <Col md={8} sm={12} xs={24} type="flex" justify="center" align="middle">
              <Form onSubmit={this.submitForm} className="login-form" style={{ maxWidth: '400px', width: '100%' }}>
                <Row>
                  <Form.Item label="Username">
                    {getFieldDecorator('username', {
                      rules: [
                        {
                          required: true,
                          message: 'กรุณาใส่ Username ด้วยครับ'
                        }
                      ]
                    })(<Input />)}
                  </Form.Item>
                  <Form.Item label="Password">
                    {getFieldDecorator('password', {
                      rules: [
                        {
                          required: true,
                          message: 'กรุณาใส่ Password ด้วยครับ'
                        },
                        {
                          validator: this.compareToSecondPassword
                        }
                      ]
                    })(<Input.Password />)}
                  </Form.Item>
                  <Form.Item label="Confirm password">
                    {getFieldDecorator('confirm', {
                      rules: [
                        {
                          required: true,
                          message: 'กรุณาใส่ Confirm password ด้วยครับ'
                        },
                        {
                          validator: this.compareToFirstPassword,
                        }
                      ]
                    })(<Input.Password onBlur={this.handleDirtyBlur} />)}
                  </Form.Item>
                  <Form.Item label="Name">
                    {getFieldDecorator('name', {
                      rules: [
                        {
                          required: true,
                          message: 'กรุณาใส่ชื่อด้วยครับ'
                        }
                      ]
                    })(<Input />)}
                  </Form.Item>
                </Row>
                <Row type="flex" justify="center">
                  <Col md={8} sm={12} xs={24}>
                    <Form.Item>
                      <Button block type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row >
    )
  }
}

export default Form.create()(Signup);