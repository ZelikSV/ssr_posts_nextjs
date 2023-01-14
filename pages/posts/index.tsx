import React, { useState, useEffect } from 'react';
import { NextPageContext } from 'next';
import Grid from '@mui/material/Grid';

import MainLayout from '../../components/MainLayout';
import Loading from '../../components/Loading';
import { IPost } from '../../types/models';
import PostCard from '../../components/PostCard';

interface IPostsProps {
  posts: IPost[] | null;
}

function Posts({ posts: serverPosts }: IPostsProps) {
  const [posts, setPosts] = useState<IPost[] | null>(serverPosts);

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
    <MainLayout titleName="Posts Page">
      {posts ? (
        <Grid container spacing={1}>
          {posts.map((post) => (
              <Grid key={post.id} item xs={12} sm={6} lg={3}>
                <PostCard post={post} />
              </Grid>
            ))}
        </Grid>
      ) : (<Loading />)}
    </MainLayout>
  );
}

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
