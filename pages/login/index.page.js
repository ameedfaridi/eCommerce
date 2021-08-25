import { Login } from 'components/common';
import Layout from 'layout';
import React from 'react';
import { detectDevice } from 'utils';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

export default function LogIn({ isMobile }) {
  const header = { name: 'Login', icon: <LockOutlinedIcon /> };
  return (
    <Layout isMobile={isMobile} canBack={true} header={header}>
      <Login />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const isMobile = detectDevice(context);

  return {
    props: {
      isMobile,
    },
  };
}
