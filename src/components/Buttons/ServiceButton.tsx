import React from 'react';

//Material UI components
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Typography } from '@material-ui/core';
import FlareIcon from '@material-ui/icons/Flare';
import clsx from 'clsx';

//Custom components
import { greyColor, redColor } from '../../constants/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 84,
    textAlign: 'center',
    '&:hover $background': {
      transition: 'all .3s ease-in-out',
      transform: 'scale(1.03)',
      backgroundColor: redColor[0],
    },
    '&:focus, &:hover': {
      outline: 'none',
    },
  },
  button: {
    position: 'relative',
    margin: theme.spacing(1),
    color: theme.palette.primary.main,
    fontSize: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    width: 84,
    height: 84,
    border: 'none',
    borderRadius: '50%',
    '&:focus $background': {
      transition: 'all .3s ease-in-out',
      transform: 'scale(1.03)',
      backgroundColor: redColor[0],
    },
  },

  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: greyColor[1],
    borderRadius: '50%',
    transition: 'all .3s ease-in-out',
  },

  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    zIndex: 1,
    border: '2px solid white',
    borderRadius: '50%',
    width: 76,
    height: 76,
  },
  label: { lineHeight: 1.2, fontSize: 15, fontWeight: 500 },
}));

interface Props {
  label?: string;
  className?: string;
}

/* TODO: implement size prop to manage different sizes */
const ServiceButton: React.FC<Props> = (props) => {
  const { label, className, ...rest } = props;

  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      <IconButton className={classes.button} {...rest}>
        <div className={classes.iconContainer}>
          <FlareIcon fontSize='inherit' />
        </div>
        <div className={classes.background} />
      </IconButton>
      <Typography className={classes.label}>{label}</Typography>
    </div>
  );
};

export default ServiceButton;
