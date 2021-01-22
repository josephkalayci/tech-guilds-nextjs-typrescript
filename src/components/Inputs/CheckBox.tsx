import React from 'react';

// material-ui components
import { makeStyles } from '@material-ui/core/styles';
import { Checkbox as MuiCheckbox, Typography } from '@material-ui/core';

// custom components
import { greyColor } from '../../constants/colors';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: 'pointer',
  },
  checkboxRoot: {
    color: greyColor[0],
    marginRight: theme.spacing(1),
    fontSize: 24,
    transition: 'all .3s ease-in-out',
    transform: 'scale(1.3)',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  checkboxChecked: {
    '&:hover': {
      backgroundColor: 'transparent !important',
    },
  },
}));

interface Props {
  label?: string;
  className?: string;
  muiClasses?: any;
  checked?: boolean;
}

const Checkbox: React.FC<Props> = (props) => {
  const { label, muiClasses, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      <MuiCheckbox
        disableTouchRipple
        classes={{
          root: classes.checkboxRoot,
          checked: classes.checkboxChecked,
          ...muiClasses,
        }}
        inputProps={{ 'aria-label': label }}
        {...rest}
      />
      <Typography component='span' variant='body1'>
        {label}
      </Typography>
    </div>
  );
};

export default Checkbox;
