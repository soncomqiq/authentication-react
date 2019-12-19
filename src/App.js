import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { Layout, Col, Row, Avatar, Button, Dropdown, Menu } from 'antd';
import logo from './images/logo.png'
import Login from './pages/authentication/Login';
import Signup from './pages/authentication/Signup';
import Home from './pages/Home';
import ChangePassword from './pages/ChangePassword';

const { Header, Content } = Layout;

class App extends React.Component {

  handleLogout = () => {
    localStorage.removeItem("ACCESS_TOKEN")
  }

  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a href="/changepassword">
            เปลี่ยนรหัสผ่าน
          </a>
        </Menu.Item>
        <Menu.Item>
          <a onClick={() => this.handleLogout()}>
            ออกจากระบบ
          </a>
        </Menu.Item>
      </Menu>
    );
    return (
      <Layout>
        <Header style={{ height: '5vh', lineHeight: '0' }} >
          <Row style={{ height: '100%' }} type="flex" align="middle">
            <Col span={4} style={{ height: '100%' }} type="flex" align="end">
              <a href="/">
                <img src={logo} alt="Logo Fakebook" style={{ height: '5vh' }} />
              </a>
            </Col>
            <Col span={20}>
              <Row type="flex" justify="end">
                <Col span={4} type="flex" align="end">
                  <Avatar
                    src="https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.0-9/71561886_1609849782479256_2419419055669641216_n.jpg?_nc_cat=111&_nc_eui2=AeGGEac45Y7P61v-juKLihSuqQvzyZAUvy9dz3sSynbKiBRLT6lgXhjtX5jjtNAY9MSDoejoGIsDoajvZuQbEsl64swyCN-293Zo2K_d4tRtLw&_nc_oc=AQnKNnIYBPW5aLIzcAhWJ2OrZZN-2HCc5yDfjONO_xau-OVSNZ2MiGhybKrEeToeLgw&_nc_ht=scontent.fbkk22-3.fna&oh=ba6de0084eebf847928c72be1a7551dd&oe=5E4F2B50"
                  />
                </Col>
                <Dropdown overlay={menu}>
                  <Col span={6} type="flex" align="start">
                    <a href="/">
                      <Button type="link">Nuttachai Kulthammanit</Button>
                    </a>
                  </Col>
                </Dropdown>
              </Row>
            </Col>
          </Row>
        </Header>
        <Content style={{ height: '95vh' }}>
          <Switch>
            {localStorage.getItem("ACCESS_TOKEN") ?
              <Route exact path="/home" component={Home} /> :
              null}
            {!localStorage.getItem("ACCESS_TOKEN") ?
              <Route exact path="/login" component={Login} /> :
              null}
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/changepassword" component={ChangePassword} />
          </Switch>
        </Content>
      </Layout>
    );
  }
}

export default App;
