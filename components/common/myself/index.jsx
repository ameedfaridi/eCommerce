import {
  Box,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import {
  AccountCircle,
  ArrowBack,
  Menu,
  ShoppingCart,
} from '@material-ui/icons';
import { websiteName } from 'assets/constants';
import { Drawer } from 'components/common';
import clsx from 'clsx';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { toggleDrawer } from 'utils';
import router from 'next/router';

const useStyles = makeStyles(theme => ({
  myself: {
    display: 'flex',
    alignItems: 'center',
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function Myself({ isMobile, canBack, header }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawer = () => {
    setOpen(true);
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div
      className={classes.myself}
      // style={{ marginLeft: isMobile ? '' : '1.5rem' }}
    >
      {isMobile &&
        (canBack ? (
          <IconButton onClick={handleBack}>
            <ArrowBack fontSize="medium" />
          </IconButton>
        ) : (
          <>
            <Drawer
              open={open}
              anchor={'left'}
              setOpen={setOpen}
              drawerBody={<DrawerBody setOpen={setOpen} />}
            />
            <IconButton onClick={handleDrawer}>
              <Menu />
            </IconButton>
          </>
        ))}
      <IconButton>
        {(isMobile && header?.icon) || (
          <ShoppingCart fontSize={!isMobile ? 'large' : 'medium'} />
        )}
      </IconButton>
      <Typography variant="button" color="textSecondary">
        {(isMobile && header?.name) || websiteName}
      </Typography>
    </div>
  );
}

const DrawerBody = ({ anchor, setOpen }) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(false, setOpen)}
      onKeyDown={toggleDrawer(false, setOpen)}
      style={{ paddingTop: '1.5rem' }}
    >
      <Box display="flex" alignItems="center" flexDirection="column">
        <Toolbar>
          <IconButton>
            <AccountCircle color="secondary" style={{ fontSize: '4rem' }} />
          </IconButton>
        </Toolbar>
        <Typography variant="button">Ameed Faridi</Typography>
      </Box>
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
