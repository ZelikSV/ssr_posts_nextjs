import { ChangeEvent, SyntheticEvent, useMemo, useReducer } from 'react';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';

import TextField from '../../components/TextField';
import { routes } from '../routes';
import styles from './styles.module.scss';

type State = {
  name: string | null;
  password: string | null;
};

const Login = () => {
  const router = useRouter();
  const [user, setUser] = useReducer(
    (prevState: State, nextState: State): State => ({
      ...prevState,
      ...nextState,
    }),
    {
      name: null,
      password: null,
    },
  );

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
