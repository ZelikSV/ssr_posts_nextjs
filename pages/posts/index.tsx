import React, { useState, useEffect } from "react";
import * as faker from "faker";
import MainLayout from "../../components/MainLayout/MainLayout";
import Loading from "../../components/Loading/Loading";
import Link from "next/link";
import { List, Avatar, Space, Button } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";

import { IPost } from "../../types/models";
import { NextPageContext } from "next";

import styles from "./posts.module.scss";

interface IPostsProps {
  posts: IPost[];
}

const Posts = ({ posts: serverPosts }: IPostsProps) => {
  const [posts, setPosts] = useState<IPost[]>(serverPosts);

  // This is data processing on both sides BE and FE
  useEffect(() => {
    async function load() {
      const res = await fetch(`${process.env.BASE_URL}/posts`);
      const postsResponse: IPost[] = await res.json();

      setPosts(postsResponse);
    }
    if (!serverPosts) {
      load();
    }
  }, [setPosts]);

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  return (
    <MainLayout title="Posts Page">
      <div className={styles.postsPage}>
        {posts ? (
          <List
            itemLayout="vertical"
            size="small"
            dataSource={posts}
            renderItem={(item) => (
              <List.Item
                key={item.id}
                actions={[
                  <IconText
                    icon={StarOutlined}
                    text={faker.random.number({ min: 12, max: 220 })}
                    key="list-vertical-star-o"
                  />,
                  <IconText
                    icon={LikeOutlined}
                    text={faker.random.number({ min: 12, max: 50 })}
                    key="list-vertical-like-o"
                  />,
                  <IconText
                    icon={MessageOutlined}
                    text={faker.random.number({ min: 12, max: 100 })}
                    key="list-vertical-message"
                  />,
                ]}
              >
                <List.Item.Meta
                  avatar={<Avatar src={faker.image.imageUrl(200, 200)} />}
                  title={<span>{item.title}</span>}
                  description={`${item.body.slice(
                    0,
                    faker.random.number({ min: 120, max: 220 })
                  )}...`}
                />
                <Button type="link">
                  <Link href="post/[id]" as={`post/${item.id}`}>
                    <a>See More</a>
                  </Link>
                </Button>
              </List.Item>
            )}
          />
        ) : (
          <Loading />
        )}
      </div>
    </MainLayout>
  );
};

Posts.getInitialProps = async ({ req }: NextPageContext) => {
  if (!req) {
    return {
      posts: null,
    };
  }
  const res = await fetch(`${process.env.BASE_URL}/posts`);
  const json = await res.json();

  return {
    posts: json,
  };
};

export default Posts;
