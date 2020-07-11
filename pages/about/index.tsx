import MainLayout from "../../components/MainLayout/MainLayout";
import React from "react";

interface IAboutProps {
  title: string;
}

const AboutPage = ({ title }: IAboutProps) => {
  return (
    <MainLayout title="About Page">
      <div>
        <h1>{title}</h1>
        <p>Hello World</p>
      </div>
    </MainLayout>
  );
};

AboutPage.getInitialProps = async () => {
  const res = await fetch(process.env.BASE_URL);
  const data = await res.json();

  return { title: data.title };
};

export default AboutPage;
