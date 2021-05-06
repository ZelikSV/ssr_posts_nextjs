import { Input } from "antd";
import { ReactNode, ChangeEvent } from "react";

import styles from "./TextField.module.scss";

type Props = {
  label: string;
  placeholder: string;
  prefix: ReactNode;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string | null;
};

const TextField = ({
  label,
  placeholder,
  prefix,
  onChange,
  name,
  value,
}: Props) => {
  return (
    <div className={styles.textField}>
      <p>{label}</p>
      <Input
        name={name}
        value={value}
        placeholder={placeholder}
        prefix={prefix}
        onChange={onChange}
      />
    </div>
  );
};

export default TextField;
