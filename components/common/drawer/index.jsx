import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { toggleDrawer } from 'utils';

export default function SimpleDrawer({ anchor, open, setOpen, drawerBody }) {
  return (
    <div>
      <React.Fragment>
        <Drawer
          anchor={anchor}
          open={open}
          onClose={toggleDrawer(false, setOpen)}
        >
          {drawerBody}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
