import React, { useState, useEffect } from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import Link from "next/link";
import Loading from "../../components/Loading/Loading";
import { IPost } from "../../types/models";
import { NextPageContext } from "next";

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

  return (
    <MainLayout title="Posts Page">
      <ul>
        {posts ? (
          posts.map((postItem) => {
            return (
              <li key={postItem.id}>
                <Link href="post/[id]" as={`post/${postItem.id}`}>
                  <h1>{postItem.title}</h1>
                </Link>
              </li>
            );
          })
        ) : (
          <Loading />
        )}
      </ul>
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
