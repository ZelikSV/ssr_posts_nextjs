import Link from "next/link";
import Head from "next/dist/next-server/lib/head";
import React from "react";
import { routes } from "../../pages/routes";

import { Layout, Menu } from "antd";

const { Header, Content, Footer } = Layout;

const MainLayout = ({ children, title = "" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            {routes.map((page) => (
              <Menu.Item key={page.id}>
                <Link href={page.path}>
                  <a>{page.title}</a>
                </Link>
              </Menu.Item>
            ))}
          </Menu>
        </Header>
        <Content className="site-layout">
          <div
            className="site-layout-background"
            style={{
              marginTop: 64,
              minHeight: "calc(100vh - 64px)",
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default MainLayout;
