import { useMemo } from "react";
import Link from "next/link";
import Head from 'next/head';
import { Layout, Menu } from "antd";
import { useRouter } from "next/router";

import { routes } from "../../pages/routes";
import styles from "./MainLayout.module.scss";

const { Header, Content } = Layout;

const MainLayout = ({ children, titleName = "" }) => {
  const router = useRouter();

  const selectedKey = useMemo(() => router.pathname.replace("/", ""), [
    router.pathname,
  ]);

  return (
    <>
      <Head>
        <title>{titleName}</title>
      </Head>
      <Layout>
        <Header className={styles.header}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[selectedKey]}
          >
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
          <div className={`site-layout-background ${styles.content}`}>
            {children}
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default MainLayout;
