import React from 'react';
import { IconButton, makeStyles, Toolbar } from '@material-ui/core';
import { Favorite, LocalMall, Person } from '@material-ui/icons';

const useStyles = makeStyles({
  margin: {
    margin: '0 0.5rem',
  },
});

export default function LoginSection({ isMobile }) {
  const classes = useStyles();

  const classesRes = isMobile ? '' : classes.margin;
  const colorName = isMobile ? 'inherit' : 'secondary';
  const size = isMobile ? 'small' : 'medium';

  return (
    <Toolbar>
      <IconButton className={classesRes}>
        <Person fontSize={size} color={colorName} />
      </IconButton>
      <IconButton className={classesRes}>
        <Favorite fontSize={size} color={colorName} />
      </IconButton>
      <IconButton className={classesRes}>
        <LocalMall fontSize={size} color={colorName} />
      </IconButton>
    </Toolbar>
  );
}
