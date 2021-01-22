import React from 'react';

//Material UI components
import MuiButton from '@material-ui/core/Button';
import { makeStyles, Theme } from '@material-ui/core/styles';

interface StyleProps {
  color?: string;
  bgColor?: string;
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  root: {
    minWidth: 330,
    height: 60,
    borderRadius: 2,
    borderWidth: 2,
    boxShadow: '8px 8px 14px -2px rgba(0,0,0,0.19)',
    borderColor: ({ color }) => color,
    transition: 'all .3s ease-in-out',
    '&:hover ': {
      backgroundColor: ({ color }) => color,
      transition: 'all .3s ease-in-out',
      transform: 'scale(1.03,1)',
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: 250,
      height: 54,
    },
  },
  label: {
    fontSize: 22,
    fontWeight: 500,
    letterSpacing: '2px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },
  outlined: {
    color: ({ color }) => color,
    '&:hover ': {
      color: '#ffffff',
    },
  },
  contained: {
    color: '#ffff',
    backgroundColor: ({ color }) => color,
  },
}));

interface ButtonProps {
  color?: string;
  children: any;
  className?: string;
  muiClasses?: any;
  variant?: 'outlined' | 'contained' | 'text' | undefined;
  onClick?: any;
  type?: any;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { color, children, muiClasses, variant, ...rest } = props;

  const classes = useStyles({ color });

  return (
    <MuiButton
      classes={{
        root: classes.root,
        label: classes.label,
        outlined: classes.outlined,
        contained: classes.contained,
        ...muiClasses,
      }}
      variant={variant}
      {...rest}
    >
      {children}
    </MuiButton>
  );
};

Button.defaultProps = {
  color: 'black',
  variant: 'outlined',
};

export default Button;
