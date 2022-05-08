import { FC } from 'react';
import MUTextField, { TextFieldProps } from '@mui/material/TextField';

const TextField: FC<TextFieldProps> = (props) => {
  return <MUTextField {...props} />;
};

export default TextField;
