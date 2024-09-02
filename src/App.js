import "./App.css";
import logo from "./logo.svg";

import { Layout, Menu } from "antd";

const { Header, Sider, Content } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={200} className="site-layout-background">
        <div style={{ padding: "16px", textAlign: "center" }}>
          <img src={logo} style={{ width: "100px", height: "auto" }} />
          <div style={{ color: "#fff", marginTop: "8px", fontSize: "16px" }}>
            Your App Name
          </div>
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          <Menu.Item key="1">Inventory</Menu.Item>
          <Menu.Item key="2">Users</Menu.Item>
          <Menu.Item key="3">Item Types</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0 }}
        >
          <p style={{ color: "white" }}>Inventory System</p>
        </Header>
        <Content style={{ padding: "0 24px", minHeight: 280 }}>
          <div>Sample Dummy Body Content</div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
