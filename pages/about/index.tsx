import React from 'react';

import MainLayout from '../../components/MainLayout';
import Loading from '../../components/Loading';

type Props = {
  title: string;
  content: string;
};

const AboutPage = ({ title, content }: Props) => {
  return (
    <MainLayout titleName="About Page">
      {title && content ? (
        <div>
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
      ) : (
        <Loading />
      )}
    </MainLayout>
  );
};

AboutPage.getInitialProps = async () => {
  const res = await fetch(`${process.env.BASE_URL}/about`);
  const data = await res.json();

  return data;
};

export default AboutPage;
