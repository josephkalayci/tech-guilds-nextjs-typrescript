import React from 'react';

// material-ui components
import AttachmentIcon from '@material-ui/icons/Attachment';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Typography } from '@material-ui/core';

// custom components
import { blackColor, greyColor } from '../../constants/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    '&:hover $icon': {
      transition: 'all .3s ease-in-out',
      color: theme.palette.secondary.main,
    },
  },
  label: {
    '& span': {
      fontSize: 20,
      fontWeight: 400,
      color: blackColor[0],
    },
  },
  iconButton: {
    '&:hover': { backgroundColor: 'transparent' },
    '&:focus $icon': {
      transition: 'all .3s ease-in-out',
      color: theme.palette.secondary.main,
    },
  },
  input: {
    display: 'none',
  },
  icon: {
    color: greyColor[0],
    marginRight: theme.spacing(2),
    fontSize: 34,
    transition: 'all .3s ease-in-out',
  },
}));

interface Props {
  id: string;
  label?: string;
  className?: string;
  accept?: string;
  multiple?: boolean;
  type?: string;
}

const UploadButton: React.FC<Props> = (props) => {
  const { id, label, className, ...rest } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <input className={classes.input} id={id} {...rest} />
      <label className={classes.label} htmlFor={id}>
        <IconButton
          disableRipple
          component='span'
          className={classes.iconButton}
        >
          <AttachmentIcon className={classes.icon} />
          <Typography component='span' variant='body1'>
            {label}
          </Typography>
        </IconButton>
      </label>
    </div>
  );
};

export default UploadButton;
