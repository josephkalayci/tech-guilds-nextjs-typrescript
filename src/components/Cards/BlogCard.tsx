import React from 'react';

//Material UI imports
import { Grid, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

//Custom components
import Link from '../Link';
import ProfileCard from './ProfileCard';
import { orangeColor } from '../../constants/colors';
import clsx from 'clsx';

interface StyleProps {
  heading?: string;
  reverseOrder?: boolean;
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  root: {},
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: ({ heading }) => (heading ? 40 : 64),
    paddingBottom: ({ heading }) => (heading ? 40 : 64),
    paddingRight: ({ reverseOrder }) => (reverseOrder ? 70 : 40),
    paddingLeft: ({ reverseOrder }) => (reverseOrder ? 40 : 70),
    order: ({ reverseOrder }) => (reverseOrder ? 1 : -1),
    [theme.breakpoints.down('sm')]: {
      padding: () => 20,
    },
    [theme.breakpoints.down('xs')]: {
      order: () => 0,
      padding: () => 20,
    },
  },
  imageContainer: {
    position: 'relative',
    borderRadius: 2,
    overflow: 'hidden',
    boxShadow: '17px 10px 31px -7px rgba(150,150,150,0.23)',
    paddingTop: '50%',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundImage: `url(${'/orangeBox.png'})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  heading: {
    marginBottom: 40,
    textTransform: 'uppercase',
    [theme.breakpoints.down('sm')]: {
      marginBottom: 20,
    },
  },
  subheading: {
    color: orangeColor[0],
    textTransform: 'uppercase',
    marginBottom: ({ heading }) => (heading ? 0 : 40),
    [theme.breakpoints.down('sm')]: {
      marginBottom: ({ heading }) => (heading ? 0 : 20),
    },
  },
  divider: {
    margin: '0 8px',
    borderColor: 'inherit',
    borderRight: '1px solid',
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      minHeight: 120,
    },
  },
  link: {
    '&:hover': {
      textDecoration: 'none',
    },
  },
}));

interface Author {
  avatar: {
    src: string;
    alt: string;
  };
  name: string;
  title: string;
  slug: string;
}

interface Props {
  heading?: string;
  slug: string;
  title: string;
  author: Author;
  category: string;
  reverseOrder?: boolean;
  className?: string;
}

const BlogCard: React.FC<Props> = (props) => {
  const {
    heading,
    slug,
    category,
    title,
    author,
    reverseOrder,
    className,
  } = props;
  const classes = useStyles({ reverseOrder, heading });

  return (
    <Grid container className={clsx(classes.root, className)}>
      <Grid item xs={12} sm={6} className={classes.imageContainer}>
        <div className={classes.image} />
        {/* TODO:add animated content */}
      </Grid>
      <Grid item xs={12} sm={6} className={classes.contentContainer}>
        {heading && (
          <Typography variant='h3' component='div' className={classes.heading}>
            {heading}
          </Typography>
        )}
        <Typography variant='body2' className={classes.subheading}>
          <Typography variant='inherit' component='span'>
            {'BLOG'}
          </Typography>
          <span className={classes.divider} />
          {category}
        </Typography>
        <Typography variant='h4' component='div' className={classes.title}>
          <Link href={slug} color='inherit' className={classes.link}>
            {title}
          </Link>
        </Typography>

        {author && (
          <ProfileCard
            image={author.avatar}
            name={author.name}
            title={author.title}
          />
        )}
      </Grid>
    </Grid>
  );
};

BlogCard.defaultProps = {
  reverseOrder: false,
};

export default BlogCard;
