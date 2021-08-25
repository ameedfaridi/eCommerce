import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import {
  AccountCircle,
  Home,
  Search,
  AddShoppingCart,
} from '@material-ui/icons';
import { useRouter } from 'next/router';

const navigatorStack = [
  {
    id: 0,
    label: 'Home',
    icon: <Home />,
    route: '/',
  },
  {
    id: 1,
    label: 'Search',
    icon: <Search />,
    route: '/me',
  },
  {
    id: 2,
    label: 'My Cart',
    icon: <AddShoppingCart />,
    route: '/me',
  },
  {
    id: 3,
    label: 'Me',
    icon: <AccountCircle />,
    route: '/me',
  },
];

// const useStyles = makeStyles(theme => ({
//   root: {
//     position: 'fixed',
//     bottom: 0,
//     zIndex: 1,
//     boxShadow: '0 0 10px 1px rgba(0,0,0,0.3)',
//   },
// }));

export default function SimpleBottomNavigation() {
  // const classes = useStyles();
  const router = useRouter();
  const [value, setValue] = React.useState(() => getRoute(router.pathname));

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        router.push(navigatorStack[newValue].route);
      }}
      showLabels
      color="secondary"
      style={{
        width: '100%',
        position: 'fixed',
        bottom: 0,
        zIndex: 1,
        boxShadow: '0 0 10px 1px rgba(0,0,0,0.3)',
      }}
    >
      {navigatorStack.map(stack => (
        <BottomNavigationAction
          label={stack.label}
          icon={stack.icon}
          key={stack.id}
        />
      ))}
    </BottomNavigation>
  );
}

function getRoute(route) {
  switch (route) {
    case '/':
      return 0;
    case '/search':
      return 1;
    case '/my-cart':
      return 2;
    case '/me':
      return 3;
    default:
      return 0;
  }
}
