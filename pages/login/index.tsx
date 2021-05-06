import {
  ChangeEvent,
  SyntheticEvent,
  useCallback,
  useMemo,
  useReducer,
} from "react";
import { Typography, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

import TextField from "../../components/TextField/TextField";
import PasswordField from "../../components/PasswordField/PasswordField";
import { routes } from "../routes";
import styles from "./login.module.scss";

const { Title } = Typography;

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
    }
  );

  const handleTextField = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      if (evt.currentTarget.name) {
        setUser({
          ...user,
          [evt.currentTarget.name]: evt.currentTarget.value,
        });
      }
    },
    [user]
  );

  const handleSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();

    router.push(routes[0].path);
  };

  const isValidUser = useMemo(() => user.name && user.password, [user]);

  return (
    <div className={styles.loginPage}>
      <form className={styles.formWrapper} onSubmit={handleSubmit}>
        <Title>Sing In</Title>
        <TextField
          label="User name"
          name="name"
          value={user.name}
          onChange={handleTextField}
          placeholder="user name"
          prefix={<UserOutlined />}
        />
        <PasswordField
          label="Password"
          name="password"
          value={user.password}
          placeholder="password"
          onChange={handleTextField}
          prefix={<LockOutlined />}
        />

        <Button type="primary" htmlType="submit" disabled={!isValidUser}>
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
