import React from 'react';

import MainLayout from '../../components/MainLayout';

interface IAboutProps {
  title: string;
  content: string;
}

const AboutPage = ({ title, content }: IAboutProps) => {
  return (
    <MainLayout titleName="About Page">
      <div>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </MainLayout>
  );
};

AboutPage.getInitialProps = async () => {
  const res = await fetch(`${process.env.BASE_URL}/about`);
  const data = await res.json();

  return data;
};

export default AboutPage;
