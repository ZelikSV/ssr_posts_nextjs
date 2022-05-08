import Router, { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

import MainLayout from '../../components/MainLayout';
import Loading from '../../components/Loading';
import { IPost, IPostNextPageContext } from '../../types/models';
import styles from './styles.module.scss';

interface IPostProps {
  post: IPost;
}

function PostItem({ post: serverPost }: IPostProps) {
  const [uiPost, setUiPost] = useState(serverPost);
  const { query } = useRouter();
  const handleGoPosts = () => {
    Router.push('/posts');
  };

  useEffect(() => {
    async function load() {
      const res = await fetch(`${process.env.BASE_URL}/posts/${query.id}`);
      const data: IPost = await res.json();

      setUiPost(data);
    }

    if (!serverPost) {
      load();
    }
  }, [setUiPost]);

  return (
    <MainLayout titleName={`post: ${uiPost.title}`}>
      {uiPost ? (
        <div className={styles.PostWrapper}>
          <h2>{uiPost.title}</h2>
          <p>{uiPost.body}</p>
          <Button onClick={handleGoPosts} className={styles.backLink}>
            Back
          </Button>
        </div>
      ) : (
        <Loading />
      )}
    </MainLayout>
  );
}

/*
This is data processing only BE side
We use DefaultLoading component in _app file and functions from Next_js getServerSideProps
 and (getStaticProps not used now)
*/

export const getServerSideProps = async ({ query }: IPostNextPageContext) => {
  const res = await fetch(`${process.env.BASE_URL}/posts/${query.id}`);
  const data = await res.json();

  return {
    props: { post: data },
  };
};

export default PostItem;
