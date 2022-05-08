import { FC, useEffect, useMemo } from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { routes } from '../../pages/routes';
import { IAppStore } from '../../types';
import { LoginActions } from '../../pages/login/actions';
import styles from './styles.module.scss';

type Props = {
  titleName?: string;
};

const MainLayout: FC<Props> = ({ children, titleName = '' }) => {
  const router = useRouter();
  const userName = useSelector((store: IAppStore) => store.login.name);
  const dispatch = useDispatch();
  const selectedKey = useMemo(() => router.pathname.replace('/', ''), [router.pathname]);

  useEffect(() => {
    dispatch(LoginActions.getUserName());
  }, []);

  return (
    <>
      <Head>
        <title>{titleName}</title>
      </Head>
      <section>
        <header className={styles.header}>
          <div className="logo" />
          <ul>
            {routes.map((page) => (
              <li
                className={classnames(styles.headerLink, {
                  [styles.activeLink]: selectedKey === page.id,
                })}
                key={page.id}
              >
                <Link href={page.path}>{page.title}</Link>
              </li>
            ))}
          </ul>
          {userName && <p className={styles.userName}>{`Hello ${userName}`}</p>}
        </header>
        <div className={styles.contentWrapper}>{children}</div>
      </section>
    </>
  );
};

export default MainLayout;
