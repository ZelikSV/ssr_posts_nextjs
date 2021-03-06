import Router, { useRouter } from "next/router";
import { useState, useEffect } from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import Loading from "../../components/Loading/Loading";
import { IPost, IPostNextPageContext } from "../../types/models";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Descriptions } from "antd";

import styles from "./post.module.scss";

interface IPostProps {
  post: IPost;
}

const PostItem = ({ post: serverPost }: IPostProps) => {
  const [uiPost, setUiPost] = useState(serverPost);
  const { query } = useRouter();
  const handleGoPosts = () => {
    Router.push("/posts");
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
        <div className={styles.postWrapper}>
          <Descriptions title={uiPost.title}>
            <Descriptions.Item>{uiPost.body}</Descriptions.Item>
          </Descriptions>
          <span onClick={handleGoPosts} className={styles.backLink}>
            <ArrowLeftOutlined />
            Back To Posts
          </span>
        </div>
      ) : (
        <Loading />
      )}
    </MainLayout>
  );
};

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
