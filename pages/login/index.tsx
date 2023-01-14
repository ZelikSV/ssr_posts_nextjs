import { ChangeEvent, SyntheticEvent, useEffect, useMemo, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';

import TextField from '../../components/TextField';
import { routes } from '../routes';
import styles from './styles.module.scss';
import { LoginActions } from './actions';
import { IAppStore } from '../../types';

type State = {
  name: string;
  password: string;
};

function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const userName = useSelector((store: IAppStore) => store.login.name);
  const [user, setUser] = useReducer(
    (prevState: State, nextState: State): State => ({
      ...prevState,
      ...nextState,
    }),
    {
      name: '',
      password: '',
    },
  );

  useEffect(() => {
    if (userName) {
      router.push(routes[0].path);
    }
  }, [userName]);

  const handleTextField = (evt: ChangeEvent<HTMLInputElement>) => {
    if (evt.currentTarget.name) {
      setUser({
        ...user,
        [evt.currentTarget.name]: evt.currentTarget.value,
      });
    }
  };

  const handleSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();
    dispatch(LoginActions.setUserData(user));

    router.push(routes[0].path);
  };

  const isValidUser = useMemo(() => user.name && user.password, [user]);

  return (
    <div className={styles.formPage}>
      <form className={styles.formWrapper} onSubmit={handleSubmit}>
        <TextField label="User name" name="name" value={user.name} onChange={handleTextField} />
        <TextField label="Password" name="password" type="password" value={user.password} onChange={handleTextField} />

        <Button type="submit" variant="contained" disabled={!isValidUser}>
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
