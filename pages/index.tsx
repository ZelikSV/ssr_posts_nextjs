import type { NextPage } from 'next';

import MainLayout from '../components/MainLayout/MainLayout';
import Login from './login';

const Home: NextPage = () => {
  return (
    <div>
      <MainLayout titleName="Login">
        <Login />
      </MainLayout>
    </div>
  );
};

export default Home;
