import React from 'react';
import Head from 'next/head';
import { cartIcon } from 'assets/meta';
import { descriptiveTitle } from 'assets/constants';
import { NavBar } from 'components/common';
import { BottomNavigation } from 'components/mobile';

export default function Layout({
  children,
  title,
  icon,
  isMobile,
  canBack,
  header,
}) {
  return (
    <React.Fragment>
      <Head>
        <title>{title ? title : descriptiveTitle}</title>
        <link rel="shortcut icon" href={icon ? icon : cartIcon} />
      </Head>
      <NavBar isMobile={isMobile} canBack={canBack} header={header} />
      <div>{children}</div>
      {isMobile && !canBack && <BottomNavigation />}
    </React.Fragment>
  );
}
