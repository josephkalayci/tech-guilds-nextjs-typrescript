import React from 'react';

// material-ui components
import MuiTextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

//Custom components
import { blueColor } from '../../constants/colors';

const useStyles = makeStyles(() => ({
  root: {
    '& .Mui-error': {
      fontWeight: 300,
    },
  },
  underline: {
    borderBottomWidth: 2,
    '&:hover': {
      '&:before': {
        borderBottomColor: blueColor[0],
        borderBottomWidth: 2,
      },
    },
    '&:after': {
      borderBottomColor: blueColor[0],
      transition: 'none',
    },
    '&:before': {
      borderBottomColor: blueColor[0],
      borderBottomWidth: 2,
    },
  },
}));

interface InputProps {
  children?: React.ReactNode;
  className?: string;
  muiClasses?: any;
  placeholder?: string;
  fullWidth?: boolean;
  error?: boolean;
  value?: string;
  helperText?: string;
  InputProps?: any;
  id?: any;
  name?: string;
  required?: boolean;
  autoComplete?: string;
  type?: string;
  multiline?: boolean;
}

const TextField: React.FC<InputProps> = (props) => {
  const { className, value, muiClasses, ...rest } = props;
  const classes = useStyles();
  const [userInput, setUserInput] = React.useState(value);

  return (
    <MuiTextField
      color='secondary'
      value={userInput}
      onChange={(event) => setUserInput(event.target.value)}
      InputProps={{
        classes: { underline: !userInput ? undefined : classes.underline },
      }}
      classes={muiClasses}
      className={clsx(classes.root, className)}
      {...rest}
    />
  );
};

export default TextField;
