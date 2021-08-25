import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Toolbar, AppBar } from '@material-ui/core';

import { DesktopMenuList } from 'components/desktop';
import { SearchSection, LoginSection, Myself } from 'components/common';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  myself: {
    display: 'flex',
    alignItems: 'center',
  },
  margin: {
    margin: '0 0.5rem',
  },
}));

export default function LayoutNavBar({ isMobile, canBack, header }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="default"
        style={{ height: isMobile ? '3rem' : '4rem' }}
      >
        <Container>
          <Myself isMobile={isMobile} canBack={canBack} header={header} />
          {!isMobile && <DesktopMenuList />}
          <div className={classes.title} />
          {!isMobile && (
            <Toolbar>
              <SearchSection />
            </Toolbar>
          )}
          {(!canBack || !isMobile) && <LoginSection isMobile={isMobile} />}
        </Container>
      </AppBar>
    </div>
  );
}

const Container = ({ children, ...props }) => {
  return (
    <div style={{ display: 'flex', height: '100%' }} {...props}>
      {children}
    </div>
  );
};
