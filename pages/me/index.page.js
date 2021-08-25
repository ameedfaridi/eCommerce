import React from 'react';
import router from 'next/router';
import { Button, makeStyles, Typography } from '@material-ui/core';

import Layout from 'layout';
import { detectDevice } from 'utils';

const useStyles = makeStyles(theme => ({
  notLoggedIn: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    display: 'grid',
    placeItems: 'center',
  },
}));

export default function Me({ isMobile }) {
  return isMobile ? <Mobile /> : <Desktop />;
}

const Mobile = () => {
  const login = false;
  return <Layout isMobile={true}>{login ? null : <SignIn />}</Layout>;
};
const Desktop = () => {
  const classes = useStyles();

  return (
    <Layout isMobile={false}>
      <h1 className={classes.notLoggedIn}>
        Desktop view not available right now
      </h1>
    </Layout>
  );
};

const SignIn = () => {
  const classes = useStyles();

  const handleRoute = () => {
    router.push('/login');
  };

  return (
    <React.Fragment>
      <div className={classes.notLoggedIn}>
        <Typography variant="subtitle2">You are not Logged In</Typography>
        <Typography variant="subtitle2">wants to login?</Typography>
        <Button variant="outlined" onClick={handleRoute}>
          Login
        </Button>
      </div>
    </React.Fragment>
  );
};

export async function getServerSideProps(context) {
  const isMobile = detectDevice(context);

  return {
    props: {
      isMobile,
    },
  };
}
