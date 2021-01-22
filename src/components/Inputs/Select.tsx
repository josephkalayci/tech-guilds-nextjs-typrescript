import React from 'react';

// material-ui components
import MenuItem from '@material-ui/core/MenuItem';
import MuiSelect from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {},
  menuItemRoot: {
    '&:hover': {
      color: theme.palette.secondary.main,
      backgroundColor: 'transparent',
    },
    '&:focus': {
      backgroundColor: 'transparent',
    },
  },
  menuItemSelected: {
    '&$menuItemSelected, &$menuItemSelected:focus, &$menuItemSelected:hover': {
      color: theme.palette.secondary.main,
      backgroundColor: 'transparent',
      borderLeft: `3px solid ${theme.palette.secondary.main}`,
    },
  },
}));

const usePlaceholderStyles = makeStyles(() => ({
  placeholder: {
    color: '#8E8E8E',
    fontWeight: 300,
  },
}));

interface PlaceholderProp {
  children: React.ReactNode;
}

const Placeholder = ({ children }: PlaceholderProp) => {
  const classes = usePlaceholderStyles();
  return <div className={classes.placeholder}>{children}</div>;
};

interface InputProps {
  options: {
    label: string;
    value: string;
  }[];
  placeholder?: string;
  className?: string;
  muiClasses?: any;
  fullWidth?: boolean;
  id?: string;
  name?: string;
  required?: boolean;
}

const Select: React.FC<InputProps> = (props) => {
  const { options, placeholder, muiClasses, ...rest } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState('');

  return (
    <MuiSelect
      color='secondary'
      value={value}
      displayEmpty
      onChange={(event: any) => setValue(event.target.value)}
      renderValue={
        value !== ''
          ? undefined
          : () => <Placeholder>{placeholder}</Placeholder>
      }
      classes={muiClasses}
      {...rest}
    >
      {options.map((_option: any) => (
        <MenuItem
          disableRipple
          key={_option.value}
          value={_option.value}
          classes={{
            root: classes.menuItemRoot,
            selected: classes.menuItemSelected,
          }}
        >
          {_option.label}
        </MenuItem>
      ))}
    </MuiSelect>
  );
};

export default Select;
