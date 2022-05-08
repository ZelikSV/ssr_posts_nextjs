import { FC, useMemo } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import { routes } from '../../pages/routes';

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #1976d2;
  z-index: 1;
  width: 100%;
`;

const Content = styled.div`
  margin-top: 55px;
`;

const HeaderLink = styled.li<{ isSelected: boolean }>`
  list-style: none;
  display: inline-block;
  margin-right: 10px;

  a {
    text-decoration: ${({ isSelected }: { isSelected: boolean }) => (isSelected ? 'underline' : 'none')};
    color: #fff;
  }
`;

type Props = {
  titleName?: string;
};

const MainLayout: FC<Props> = ({ children, titleName = '' }) => {
  const router = useRouter();

  const selectedKey = useMemo(() => router.pathname.replace('/', ''), [router.pathname]);

  return (
    <>
      <Head>
        <title>{titleName}</title>
      </Head>
      <section>
        <Header>
          <div className="logo" />
          <ul>
            {routes.map((page) => (
              <HeaderLink key={page.id} isSelected={selectedKey === page.id}>
                <Link href={page.path}>{page.title}</Link>
              </HeaderLink>
            ))}
          </ul>
        </Header>
        <Content>{children}</Content>
      </section>
    </>
  );
};

export default MainLayout;
