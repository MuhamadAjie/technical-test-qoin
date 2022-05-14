import React, { useState } from "react";
import { UnorderedListOutlined } from "@ant-design/icons";
import { Layout, Menu, Breadcrumb } from "antd";
import { TableGenre } from "../Components/TableGenre";
import { TableMovie } from "../Components/TableMovie";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const { Header, Content, Sider } = Layout;

  const handlePage1 = () => {
    setShow(true);
  };
  const handlePage2 = () => {
    setShow(false);
  };

  return (
    <>
      <Layout>
        <Header className="header">
          <div className="logo">Test Code PT. Qoin Digital Indonesia</div>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              style={{
                height: "100%",
                borderRight: 0,
              }}
            >
              <Menu.Item
                key="1"
                icon={<UnorderedListOutlined />}
                onClick={handlePage2}
              >
                List Genre
              </Menu.Item>
              <Menu.Item
                key="2"
                icon={<UnorderedListOutlined />}
                onClick={handlePage1}
              >
                List Movie
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout
            style={{
              padding: "0 24px 24px",
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              {show ? (
                <Breadcrumb.Item>List Movie</Breadcrumb.Item>
              ) : (
                <Breadcrumb.Item>List Genre</Breadcrumb.Item>
              )}
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {show ? <TableMovie /> : <TableGenre />}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default Dashboard;
